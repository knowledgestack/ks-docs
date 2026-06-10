
# ProposedMemoryChunkResponse


## Properties

Name | Type
------------ | -------------
`chunkId` | string
`scope` | [MemoryScope](MemoryScope.md)
`ownerPathPartId` | string
`kind` | [MemoryKind](MemoryKind.md)
`rationale` | string
`body` | string
`proposerTenantUserId` | string
`runId` | string

## Example

```typescript
import type { ProposedMemoryChunkResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "chunkId": null,
  "scope": null,
  "ownerPathPartId": null,
  "kind": null,
  "rationale": null,
  "body": null,
  "proposerTenantUserId": null,
  "runId": null,
} satisfies ProposedMemoryChunkResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProposedMemoryChunkResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


