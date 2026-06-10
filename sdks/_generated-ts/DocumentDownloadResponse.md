
# DocumentDownloadResponse

A short-lived, audited download link for a document-version artifact.

## Properties

Name | Type
------------ | -------------
`url` | string
`expiresIn` | number
`documentId` | string
`versionId` | string
`artifact` | [DownloadArtifact](DownloadArtifact.md)

## Example

```typescript
import type { DocumentDownloadResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "url": null,
  "expiresIn": null,
  "documentId": null,
  "versionId": null,
  "artifact": null,
} satisfies DocumentDownloadResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DocumentDownloadResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


