
# BulkMoveRequest

Move the selected folders and documents into ``target_folder_id``.

## Properties

Name | Type
------------ | -------------
`folderIds` | Array&lt;string&gt;
`documentIds` | Array&lt;string&gt;
`targetFolderId` | string

## Example

```typescript
import type { BulkMoveRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "folderIds": null,
  "documentIds": null,
  "targetFolderId": null,
} satisfies BulkMoveRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkMoveRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


