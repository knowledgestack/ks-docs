# Knowledge Stack — positioning (internal)

Source of truth for how we describe Knowledge Stack. When any public page drifts from this, update this doc first, then bring the page in line.

## One-liner

> **Focus on agents. We handle document intelligence.**

## Two-line version

Knowledge Stack is the document intelligence layer behind your agents — ingestion, chunking, permissions, versioning, and citation tracking — exposed through a stable MCP surface that plugs into LangChain, LangGraph, CrewAI, Temporal, OpenAI Agents SDK, pydantic-ai, Claude Desktop, and Cursor.

Build enterprise RAG and agent pipelines in minutes instead of weeks.

## What we are / are not

We are:
- A developer acceleration layer for enterprise RAG + agent pipelines
- An MCP-native retrieval surface
- A permission-aware document store with citation-grounded reads
- Framework-agnostic (any MCP client works)

We are not:
- An agent framework (use LangChain / LangGraph / CrewAI / Temporal on top)
- A model provider (bring your own OpenAI / Anthropic / open-source model)
- A generic document store (we're specifically built for agent retrieval with permissions + citations)
- A fine-tuning platform

## ICP

Teams building internal AI agents on large document collections where **permissions, citations, and structured outputs matter**. Regulated verticals: banking, insurance, healthcare, legal, accounting, pharma, energy, government.

## Differentiators (order matters)

1. **Permission-aware retrieval** — same agent code returns different results per user, by construction.
2. **Chunk-level citations** — every claim traces to a chunk UUID, verifiable by auditors.
3. **Version-aware reads** — answer as of any point in time.
4. **MCP-native** — portable across every major agent framework without glue code.
5. **Production pattern library** — 32 flagship demos across 10+ verticals.

## Voice / terminology

✅ Use:
- "Document intelligence layer"
- "Focus on agents; we handle knowledge"
- "Plugs into LangChain / LangGraph / CrewAI / Temporal"
- "Permission-aware retrieval"
- "Chunk-level citations"
- "Production-style flagships"
- "Built on Model Context Protocol (MCP)"

❌ Avoid:
- "RAG platform" (too generic)
- "AI copilot" (that's what customers build on top)
- "Vector database" (we're higher-level)
- "Replaces LangChain" (we complement)

## Framework positioning matrix

| Customer uses | Our response |
|---|---|
| LangChain / LangGraph | Use `langchain-mcp-adapters` with our MCP server. See [flagships/csv_enrichment](https://github.com/knowledgestack/ks-cookbook/tree/main/flagships/csv_enrichment). |
| CrewAI | Plug us in as a shared tool across the crew. |
| Temporal | Call the MCP server from activities for durable agent workflows. |
| OpenAI Agents SDK | First-party MCP support. Point at `uvx knowledgestack-mcp`. |
| pydantic-ai | Most cookbook flagships use this. Native MCP + schema-enforced output. |
| Claude Desktop / Cursor | Add us as an MCP server in config. Permission-scoped retrieval for your assistant. |
| "Building from scratch" | Start with [ks-cookbook](https://github.com/knowledgestack/ks-cookbook). Pick the flagship matching your vertical. |

## Elevator pitches

**For a platform engineer:**
> You're already building ingestion pipelines, permission filtering, chunk storage, version tracking, and citation verification. Knowledge Stack does all of that behind an MCP surface. Your agent framework doesn't change. Your team focuses on agent logic.

**For an ML / AI engineer:**
> Skip the glue. Our MCP server plugs into LangChain, LangGraph, CrewAI, and the OpenAI Agents SDK. Chunk-level citations and structured output come for free. 32 production-grade flagships show the patterns.

**For a VP / director:**
> Enterprise RAG usually takes 6-12 months to ship safely. Knowledge Stack collapses that to weeks. Permission-aware retrieval, audit-ready citations, pattern library across 10+ regulated verticals. Your team ships the agent; we handle the document layer.

**For a CISO / compliance officer:**
> Every read is permission-scoped to the user, not the service. Every agent claim has a chunk UUID an auditor can click through. Version-aware retrieval lets you answer 'as of' any date. SOC 2, HIPAA, GDPR-friendly by design.

## Canonical links

- Product site: https://knowledgestack.ai
- App: https://app.knowledgestack.ai
- Docs: this site
- Cookbook: https://github.com/knowledgestack/ks-cookbook
- MCP: https://github.com/knowledgestack/ks-mcp · [`knowledgestack-mcp`](https://pypi.org/project/knowledgestack-mcp/)
- Python SDK: https://github.com/knowledgestack/ks-sdk-python · [`ksapi`](https://pypi.org/project/ksapi/)
- TypeScript SDK: https://github.com/knowledgestack/ks-sdk-ts · [`@knowledge-stack/ksapi`](https://www.npmjs.com/package/@knowledge-stack/ksapi)
- Discord: https://discord.gg/McHmxUeS
