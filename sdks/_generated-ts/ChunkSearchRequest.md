
# ChunkSearchRequest

Request body for chunk search (dense vector, full-text BM25, or hybrid).

## Properties

Name | Type
------------ | -------------
`query` | string
`searchType` | [SearchType](SearchType.md)
`hybridProfile` | [HybridSearchProfile](HybridSearchProfile.md)
`denseWeight` | number
`sparseWeight` | number
`parentPathIds` | Array&lt;string&gt;
`tagIds` | Array&lt;string&gt;
`chunkTypes` | [Array&lt;ChunkType&gt;](ChunkType.md)
`ingestionTimeAfter` | Date
`activeVersionOnly` | boolean
`topK` | number
`scoreThreshold` | number
`withDocument` | boolean

## Example

```typescript
import type { ChunkSearchRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "query": null,
  "searchType": null,
  "hybridProfile": null,
  "denseWeight": null,
  "sparseWeight": null,
  "parentPathIds": null,
  "tagIds": null,
  "chunkTypes": null,
  "ingestionTimeAfter": null,
  "activeVersionOnly": null,
  "topK": null,
  "scoreThreshold": null,
  "withDocument": null,
} satisfies ChunkSearchRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChunkSearchRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


