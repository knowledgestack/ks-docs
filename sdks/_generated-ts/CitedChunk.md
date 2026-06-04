
# CitedChunk

One cited chunk with the source document context for FE rendering.  ``chunk_id`` is the load-bearing field — every reader can use it via ``/v1/chunks/bulk``. The document fields are populated by ``save_document`` when it resolves each chunk through the KS API at save time; they stay ``None`` only when the chunk could not be resolved (e.g. the agent cited an id that no longer exists, or the resolve call failed). The doc-info snapshot is captured at save time; later renames or replacements of the source document do not update it.

## Properties

Name | Type
------------ | -------------
`chunkId` | string
`documentId` | string
`documentName` | string
`documentType` | [DocumentType](DocumentType.md)
`documentVersionId` | string
`versionNumber` | number

## Example

```typescript
import type { CitedChunk } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "chunkId": null,
  "documentId": null,
  "documentName": null,
  "documentType": null,
  "documentVersionId": null,
  "versionNumber": null,
} satisfies CitedChunk

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CitedChunk
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


