
# ScoredChunkResponse

Chunk response with search ranking score.

## Properties

Name | Type
------------ | -------------
`id` | string
`pathPartId` | string
`contentId` | string
`content` | string
`chunkType` | [ChunkType](ChunkType.md)
`chunkMetadata` | [ChunkMetadata](ChunkMetadata.md)
`numTokens` | number
`parentPathId` | string
`prevSiblingPathId` | string
`nextSiblingPathId` | string
`materializedPath` | string
`systemManaged` | boolean
`tenantId` | string
`createdAt` | Date
`updatedAt` | Date
`assetS3Urls` | Array&lt;string&gt;
`document` | [ChunkDocumentResponse](ChunkDocumentResponse.md)
`documentVersion` | [ChunkDocumentVersionResponse](ChunkDocumentVersionResponse.md)
`score` | number

## Example

```typescript
import type { ScoredChunkResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "pathPartId": null,
  "contentId": null,
  "content": null,
  "chunkType": null,
  "chunkMetadata": null,
  "numTokens": null,
  "parentPathId": null,
  "prevSiblingPathId": null,
  "nextSiblingPathId": null,
  "materializedPath": null,
  "systemManaged": null,
  "tenantId": null,
  "createdAt": null,
  "updatedAt": null,
  "assetS3Urls": null,
  "document": null,
  "documentVersion": null,
  "score": null,
} satisfies ScoredChunkResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScoredChunkResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


