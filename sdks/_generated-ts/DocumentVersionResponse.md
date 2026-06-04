
# DocumentVersionResponse

DocumentVersion response model.  Shared schema for DocumentVersion responses, used by Document endpoints and DocumentVersion endpoints.

## Properties

Name | Type
------------ | -------------
`id` | string
`pathPartId` | string
`version` | number
`name` | string
`parentPathId` | string
`materializedPath` | string
`systemManaged` | boolean
`tenantId` | string
`uploader` | [UserInfo](UserInfo.md)
`createdAt` | Date
`updatedAt` | Date
`assetS3Url` | string
`fastPlaintextUrl` | string
`pageScreenshotUrls` | Array&lt;string&gt;
`systemMetadata` | [DocumentVersionMetadata](DocumentVersionMetadata.md)

## Example

```typescript
import type { DocumentVersionResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "pathPartId": null,
  "version": null,
  "name": null,
  "parentPathId": null,
  "materializedPath": null,
  "systemManaged": null,
  "tenantId": null,
  "uploader": null,
  "createdAt": null,
  "updatedAt": null,
  "assetS3Url": null,
  "fastPlaintextUrl": null,
  "pageScreenshotUrls": null,
  "systemMetadata": null,
} satisfies DocumentVersionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DocumentVersionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


