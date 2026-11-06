
# SubtreeChunkGroup

Hierarchy payload shared by chunk, table and skill points in a subtree.  The legacy name and chunk_ids field are retained for existing clients.

## Properties

Name | Type
------------ | -------------
`chunkIds` | Array&lt;string&gt;
`pointIds` | Array&lt;string&gt;
`pathPartIds` | Array&lt;string&gt;
`tagIds` | Array&lt;string&gt;

## Example

```typescript
import type { SubtreeChunkGroup } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "chunkIds": null,
  "pointIds": null,
  "pathPartIds": null,
  "tagIds": null,
} satisfies SubtreeChunkGroup

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubtreeChunkGroup
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


