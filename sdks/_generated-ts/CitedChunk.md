
# CitedChunk

One cited chunk with the source document context for FE rendering.  ``chunk_id`` is the load-bearing field — every reader can use it via ``/v1/chunks/bulk``. The document fields are populated by ``ks_upload_from_sandbox`` when it resolves each chunk through the KS API at save time; they stay ``None`` only when a *transient* resolve failure (network, 5xx) left the chunk unenriched. A chunk that no longer exists (a definitive 404) is dropped at save time rather than persisted with a bare id, so a dead citation never reaches the FE. The doc-info snapshot is captured at save time; later renames or replacements of the source document do not update it.

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


