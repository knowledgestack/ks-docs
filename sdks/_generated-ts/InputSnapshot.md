
# InputSnapshot

One entry of a run\'s input scope, self-describing its pin semantics.  ``part_type`` is the kind discriminator:  * ``DOCUMENT_VERSION`` — a pinned document version. The DOCUMENT in   the request scope was resolved to its active version at trigger   time; ``path_part_id`` is that DOCUMENT_VERSION path_part and the   entry does not float. * ``FOLDER`` — a live folder reference. ``path_part_id`` is the   FOLDER path_part itself; its contents are NOT captured here and   are enumerated live by the runner (see ``materialized_path`` for   subtree scoping). * ``DATA_SOURCE`` / ``API_CONNECTION`` — a live connector reference   (DB / API). ``path_part_id`` is the connector path_part itself; the   runner queries it live via its connector tools, nothing is captured   here.  The underlying PDO id (DocumentVersion / Folder / connector) is resolved live at run time from ``path_part.metadata_obj_id``, not stored here.

## Properties

Name | Type
------------ | -------------
`pathPartId` | string
`materializedPath` | string
`partType` | string
`origin` | [InputOrigin](InputOrigin.md)

## Example

```typescript
import type { InputSnapshot } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "pathPartId": null,
  "materializedPath": null,
  "partType": null,
  "origin": null,
} satisfies InputSnapshot

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InputSnapshot
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


