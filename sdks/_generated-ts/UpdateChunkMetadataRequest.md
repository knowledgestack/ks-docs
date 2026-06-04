
# UpdateChunkMetadataRequest

Request to update chunk metadata and/or move the chunk.

## Properties

Name | Type
------------ | -------------
`chunkMetadata` | [ChunkMetadata](ChunkMetadata.md)
`parentPathPartId` | string
`prevSiblingPathId` | string
`moveToHead` | boolean

## Example

```typescript
import type { UpdateChunkMetadataRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "chunkMetadata": null,
  "parentPathPartId": null,
  "prevSiblingPathId": null,
  "moveToHead": null,
} satisfies UpdateChunkMetadataRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateChunkMetadataRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


