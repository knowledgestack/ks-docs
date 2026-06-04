
# CreateChunkRequest

Request to create a new chunk.

## Properties

Name | Type
------------ | -------------
`parentPathId` | string
`content` | string
`chunkType` | [ChunkType](ChunkType.md)
`chunkMetadata` | [ChunkMetadata](ChunkMetadata.md)
`prevSiblingPathId` | string

## Example

```typescript
import type { CreateChunkRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "parentPathId": null,
  "content": null,
  "chunkType": null,
  "chunkMetadata": null,
  "prevSiblingPathId": null,
} satisfies CreateChunkRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateChunkRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


