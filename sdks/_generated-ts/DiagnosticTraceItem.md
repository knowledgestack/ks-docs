
# DiagnosticTraceItem

One trace of the conversation; stats and the link are null unless ready.

## Properties

Name | Type
------------ | -------------
`status` | [DiagnosticTraceStatus](DiagnosticTraceStatus.md)
`kind` | [TraceKind](TraceKind.md)
`reason` | [DiagnosticTraceFailureReason](DiagnosticTraceFailureReason.md)
`traceId` | string
`runId` | string
`threadId` | string
`messageId` | string
`userId` | string
`startedAt` | Date
`endedAt` | Date
`durationMs` | number
`model` | string
`generations` | number
`toolCalls` | number
`subagents` | number
`inputTokens` | number
`outputTokens` | number
`cachedTokens` | number
`reasoningTokens` | number
`maxContext` | number
`degenerateGens` | number
`selfDoubtPer1k` | number
`cacheRate` | number
`reasoningShare` | number
`singleToolRate` | number
`nEvents` | number
`metrics` | { [key: string]: any; }
`traceComplete` | boolean
`corruptResults` | boolean
`backendVersion` | string
`schemaVersion` | number
`title` | string
`path` | string
`workflowId` | string
`workflowName` | string
`state` | string
`runLabel` | string
`traceUrl` | string
`expiresInSeconds` | number

## Example

```typescript
import type { DiagnosticTraceItem } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "kind": null,
  "reason": null,
  "traceId": null,
  "runId": null,
  "threadId": null,
  "messageId": null,
  "userId": null,
  "startedAt": null,
  "endedAt": null,
  "durationMs": null,
  "model": null,
  "generations": null,
  "toolCalls": null,
  "subagents": null,
  "inputTokens": null,
  "outputTokens": null,
  "cachedTokens": null,
  "reasoningTokens": null,
  "maxContext": null,
  "degenerateGens": null,
  "selfDoubtPer1k": null,
  "cacheRate": null,
  "reasoningShare": null,
  "singleToolRate": null,
  "nEvents": null,
  "metrics": null,
  "traceComplete": null,
  "corruptResults": null,
  "backendVersion": null,
  "schemaVersion": null,
  "title": null,
  "path": null,
  "workflowId": null,
  "workflowName": null,
  "state": null,
  "runLabel": null,
  "traceUrl": null,
  "expiresInSeconds": null,
} satisfies DiagnosticTraceItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiagnosticTraceItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


