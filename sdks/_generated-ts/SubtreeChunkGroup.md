
# SubtreeChunkGroup

A group of chunks sharing identical path_part_ids and tag_ids.  Used by PathPartCRUDService.resolve_subtree_chunks to batch downstream Qdrant set_payload calls.

## Properties

Name | Type
------------ | -------------
`chunkIds` | Array&lt;string&gt;
`pathPartIds` | Array&lt;string&gt;
`tagIds` | Array&lt;string&gt;

## Example

```typescript
import type { SubtreeChunkGroup } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "chunkIds": null,
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


