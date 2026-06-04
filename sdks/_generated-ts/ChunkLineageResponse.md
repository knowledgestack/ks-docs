
# ChunkLineageResponse

Single chunk lineage edge response.

## Properties

Name | Type
------------ | -------------
`parentChunkId` | string
`chunkId` | string
`tenantId` | string
`createdAt` | Date

## Example

```typescript
import type { ChunkLineageResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "parentChunkId": null,
  "chunkId": null,
  "tenantId": null,
  "createdAt": null,
} satisfies ChunkLineageResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChunkLineageResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


