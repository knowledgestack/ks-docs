
# BulkDownloadRequest

A selection of folders and/or documents to package into one ``.zip``.  Folder ids and document ids are PDO ids. Folders are enumerated recursively; documents are included directly. At least one id must be provided.

## Properties

Name | Type
------------ | -------------
`folderIds` | Array&lt;string&gt;
`documentIds` | Array&lt;string&gt;

## Example

```typescript
import type { BulkDownloadRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "folderIds": null,
  "documentIds": null,
} satisfies BulkDownloadRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkDownloadRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


