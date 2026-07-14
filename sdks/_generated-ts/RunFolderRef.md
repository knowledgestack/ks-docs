
# RunFolderRef

A run\'s managed subfolder (inputs / outputs / discussions).  ``id`` is the FOLDER PDO id — pass it to ``list_folder_contents`` or ``bulk-download`` (``folder_ids``) to act on the whole folder in one call. ``path_part_id`` is the underlying path part.

## Properties

Name | Type
------------ | -------------
`id` | string
`pathPartId` | string
`materializedPath` | string

## Example

```typescript
import type { RunFolderRef } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "pathPartId": null,
  "materializedPath": null,
} satisfies RunFolderRef

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RunFolderRef
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


