
# ChunkNeighborsResponse

Response for chunk neighbor traversal.  Returns items in the same ``SectionOrChunkItem`` discriminated union format used by the document version contents endpoint.

## Properties

Name | Type
------------ | -------------
`items` | [Array&lt;SectionContentItemOrChunkContentItem&gt;](SectionContentItemOrChunkContentItem.md)
`anchorIndex` | number
`anchorOffset` | number
`total` | number
`documentVersionId` | string

## Example

```typescript
import type { ChunkNeighborsResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "items": null,
  "anchorIndex": null,
  "anchorOffset": null,
  "total": null,
  "documentVersionId": null,
} satisfies ChunkNeighborsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChunkNeighborsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


