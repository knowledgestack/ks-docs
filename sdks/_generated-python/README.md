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

The official Python client for the Knowledge Stack API. One client authenticates
with an API key, ingests documents, asks the agent, and streams chat.

The full per-endpoint reference is generated alongside this package under
[`./docs/`](./docs/).

## Install

```bash
pip install ksapi
```

## Authenticate

Mint an API key (in the app under API Keys, or `POST /v1/api-keys`) and pass it
as `access_token`. The client sends it as `Authorization: Bearer <key>` on every
request:

```python
import ksapi
from ksapi.api.documents_api import DocumentsApi

config = ksapi.Configuration(
    host="https://api.your-host.example",
    access_token="sk-user-...",  # your API key
)
client = ksapi.ApiClient(config)

# Smoke test — list documents you can access
print(DocumentsApi(client).list_documents(limit=10).total, "documents")
```

Browser/session callers authenticate with the `ks_uat` cookie instead:
`ksapi.Configuration(host=..., api_key={"cookieAuth": "<ks_uat value>"})`.

## Ingest a document and wait until it's searchable

Ingestion is asynchronous. Upload, then poll until the active version's pipeline
status is `completed` — at that point the chunks are embedded and searchable:

```python
import time
from ksapi.api.documents_api import DocumentsApi

docs = DocumentsApi(client)

with open("contract.pdf", "rb") as fh:
    created = docs.ingest_document(
        file=fh.read(),
        path_part_id="<parent-folder-path-part-id>",  # a FOLDER
        name="contract.pdf",
    )

while True:
    version = docs.get_document(created.document_id).active_version
    meta = version.system_metadata
    status = meta.pipeline_state.status if meta and meta.pipeline_state else None
    if status in ("completed", "failed"):
        break
    time.sleep(2)
print("ingestion:", status)
```

## Ask the agent

```python
from ksapi.api.agent_api import AgentApi
from ksapi.models.ask_request import AskRequest

answer = AgentApi(client).agent_ask(AskRequest(prompt="What are the renewal terms?"))
print(answer.text)
```

Citation-grounded, multi-turn chat runs through **threads**; each assistant
message exposes `content.citations`. Stream those tokens live below.

## Stream chat responses (SSE)

The agent streams over Server-Sent Events at `GET /v1/threads/{thread_id}/stream`.
The generated `stream_thread()` method buffers the whole response, so consume the
stream directly — the body is `data: <json>` lines terminated by `data: [DONE]`:

```python
import httpx

def stream_thread(host: str, api_key: str, thread_id: str):
    headers = {"Authorization": f"Bearer {api_key}"}
    with httpx.Client(base_url=host, headers=headers, timeout=60) as http:
        with http.stream("GET", f"/v1/threads/{thread_id}/stream") as response:
            for line in response.iter_lines():
                if not line.startswith("data:"):
                    continue  # skip event:/id:/keepalive lines
                payload = line[len("data:"):].strip()
                if payload == "[DONE]":
                    return
                yield payload  # JSON event — parse with json.loads()

for event in stream_thread(config.host, "sk-user-...", "<thread-id>"):
    print(event)
```

## Errors

Every error response keeps `detail` and adds a machine-readable `code` plus the
`request_id` (also returned as the `x-request-id` header) — quote it to support:

```python
from ksapi.exceptions import NotFoundException

try:
    DocumentsApi(client).get_document("00000000-0000-0000-0000-000000000000")
except NotFoundException as exc:
    body = exc.body  # {"detail": ..., "code": "not_found", "request_id": "..."}
    print(exc.status, body)
```

The client raises a typed exception per status: `BadRequestException` (400),
`UnauthorizedException` (401), `ForbiddenException` (403), `NotFoundException`
(404), `ConflictException` (409), `UnprocessableEntityException` (422), and
`ServiceException` (5xx).
