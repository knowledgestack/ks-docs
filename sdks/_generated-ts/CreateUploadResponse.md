
# CreateUploadResponse

Handles for a started resumable upload.

## Properties

Name | Type
------------ | -------------
`documentId` | string
`documentVersionId` | string
`uploadToken` | string
`partSize` | number

## Example

```typescript
import type { CreateUploadResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "documentId": null,
  "documentVersionId": null,
  "uploadToken": null,
  "partSize": null,
} satisfies CreateUploadResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateUploadResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


