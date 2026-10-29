# ksapi — Knowledge Stack Python SDK

> **Focus on agents. We handle document intelligence.**
>
> Python client for the Knowledge Stack API.

[![PyPI](https://img.shields.io/pypi/v/ksapi)](https://pypi.org/project/ksapi/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Discord](https://img.shields.io/badge/Discord-join%20the%20community-5865F2?logo=discord&logoColor=white)](https://discord.gg/McHmxUeS)

## Install

```bash
pip install ksapi
# or
uv pip install ksapi
```

## Related repos

- **[ks-cookbook](https://github.com/knowledgestack/ks-cookbook)** — 32 production-style agent demos using this SDK and the MCP server.
- **[ks-mcp](https://github.com/knowledgestack/ks-mcp)** — MCP server for agent frameworks.
- **[ks-sdk-ts](https://github.com/knowledgestack/ks-sdk-ts)** — TypeScript counterpart ([`@knowledge-stack/ksapi`](https://www.npmjs.com/package/@knowledge-stack/ksapi) on npm).
- **[ks-docs](https://github.com/knowledgestack/ks-docs)** — central developer docs (Mintlify → docs.knowledgestack.ai).

For most agent use cases, talk to Knowledge Stack via the MCP server, not this SDK directly. This SDK is the right choice when you need admin / write operations or are building infrastructure (ingestion pipelines, schedulers, migration tools).

## How this package is maintained

This package is **generated from the Knowledge Stack OpenAPI specification** by [OpenAPI Generator](https://openapi-generator.tech). API-shape issues belong upstream in `ks-backend`; client-side bugs (import problems, wrapper behavior, release packaging) belong here.

Below this line is the auto-generated reference content.

---

# ksapi — Python SDK Quickstart

The official Python client for the Knowledge Stack API. OpenAPI Generator
7.26.0 generates one HTTPX2 package with both async and blocking methods.
The per-endpoint reference is generated alongside the package under `docs/`.

## Install

```bash
pip install ksapi
```

## Async calls and authentication

Mint an API key in the app and pass it as `access_token`. Requests send
`Authorization: Bearer <key>`. Point the client at your self-hosted deployment:

```python
import asyncio
import ksapi
from ksapi.api.documents_api import DocumentsApi

config = ksapi.Configuration(
    host="https://api.your-host.example",
    access_token="sk-user-...",
)

async def main():
    async with ksapi.ApiClient(config) as client:
        page = await DocumentsApi(client).list_documents(limit=10)
        print(page.total, "documents")

asyncio.run(main())  # In an existing event loop, await main() instead.
```

Browser/session callers can use `Configuration(api_key={"cookieAuth": token},
host=...)` or `client.set_default_header("Cookie", f"ks_uat={token}")`.
Reuse the client on its owning event loop, and close it with `async with` or
`await client.close()` after its requests finish.

## Blocking calls

The same API classes expose `_sync` variants. Existing blocking integrations
must rename calls such as `list_documents()` to `list_documents_sync()`:

```python
from ksapi.sync_helper import run_sync

client = ksapi.ApiClient(config)
try:
    page = DocumentsApi(client).list_documents_sync(limit=10)
    print(page.total, "documents")
finally:
    run_sync(client.close())
```

The generated sync helper uses a background event loop; closing through that
helper keeps cleanup on the same loop. `ApiClient` has no synchronous context
manager. Use separate client instances for sync and async use, and never call
`_sync` methods from async code: they block the caller's event loop.
The additional method families are `operation_sync_with_http_info()` and
`operation_sync_without_preload_content()`.

## Ingest a document and wait until it is searchable

Upload returns before ingestion completes. Poll the active version's pipeline
status before searching. This example assumes an existing async client:

```python
from pathlib import Path
from uuid import UUID

async def ingest(client, parent_path_part_id: UUID):
    docs = DocumentsApi(client)
    created = await docs.ingest_document(
        file=("contract.pdf", Path("contract.pdf").read_bytes()),
        path_part_id=parent_path_part_id,
        name="contract.pdf",
    )
    while True:
        version = (await docs.get_document(created.document_id)).active_version
        metadata = version.system_metadata if version else None
        state = metadata.pipeline_state if metadata else None
        if state and state.status in ("completed", "failed"):
            return state.status
        await asyncio.sleep(2)
```

## Ask the agent

```python
from ksapi.api.agent_api import AgentApi
from ksapi.models.ask_request import AskRequest

async def ask(client):
    answer = await AgentApi(client).agent_ask(
        AskRequest(prompt="What are the renewal terms?", output_language="en"),
        _request_timeout=600.0,
    )
    return answer.text
```

Use `output_language="zh"` for Simplified Chinese. HTTPX2 request timeouts bound
individual network phases, not the total operation. Use `asyncio.timeout()`
when an async caller needs a total deadline. The generator defaults to 300
seconds per phase; long operations can supply an explicit `_request_timeout`.
Cancellation stops the local wait; it does not undo an accepted server mutation.

## Stream chat responses (SSE)

Generated methods buffer bodies, including `without_preload_content` variants.
For SSE or large binary downloads, use an HTTPX2 streaming client. Raw responses
from generated methods are HTTPX2 responses (`status_code`, `content`,
`await aread()`, `await aclose()`), not urllib3 responses.

```python
import httpx2

async def stream_thread(host: str, api_key: str, thread_id: str):
    headers = {"Authorization": f"Bearer {api_key}"}
    async with httpx2.AsyncClient(base_url=host, headers=headers, timeout=60) as http:
        async with http.stream("GET", f"/v1/threads/{thread_id}/stream") as response:
            response.raise_for_status()
            async for line in response.aiter_lines():
                if not line.startswith("data:"):
                    continue
                payload = line[len("data:"):].strip()
                if payload == "[DONE]":
                    return
                yield payload
```

## Errors

Generated `ApiException` subclasses expose `status` and the response `body`.
Error bodies contain `detail`, a machine-readable `code`, and `request_id`;
branch on the code and quote the request ID when reporting an error.
Transport failures raise HTTPX2 exceptions such as `httpx2.RequestError`.

```python
from ksapi.exceptions import NotFoundException
from uuid import UUID

async def lookup(client, document_id: UUID):
    try:
        return await DocumentsApi(client).get_document(document_id)
    except NotFoundException as exc:
        print(exc.status, exc.body)
```
