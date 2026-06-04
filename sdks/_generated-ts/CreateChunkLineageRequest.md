
# CreateChunkLineageRequest

Request to batch-create lineage edges for a child chunk.

## Properties

Name | Type
------------ | -------------
`chunkId` | string
`parentChunkIds` | Array&lt;string&gt;

## Example

```typescript
import type { CreateChunkLineageRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "chunkId": null,
  "parentChunkIds": null,
} satisfies CreateChunkLineageRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateChunkLineageRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


