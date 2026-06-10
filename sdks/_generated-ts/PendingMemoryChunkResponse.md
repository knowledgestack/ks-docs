
# PendingMemoryChunkResponse


## Properties

Name | Type
------------ | -------------
`chunkId` | string
`kind` | [MemoryKind](MemoryKind.md)
`scope` | [MemoryScope](MemoryScope.md)
`ownerPathPartId` | string
`proposerTenantUserId` | string
`runId` | string
`rationale` | string
`body` | string

## Example

```typescript
import type { PendingMemoryChunkResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "chunkId": null,
  "kind": null,
  "scope": null,
  "ownerPathPartId": null,
  "proposerTenantUserId": null,
  "runId": null,
  "rationale": null,
  "body": null,
} satisfies PendingMemoryChunkResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PendingMemoryChunkResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


