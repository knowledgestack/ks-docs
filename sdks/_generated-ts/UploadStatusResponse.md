
# UploadStatusResponse

Parts S3 already holds — resume by re-sending the rest.

## Properties

Name | Type
------------ | -------------
`parts` | [Array&lt;UploadPartResponse&gt;](UploadPartResponse.md)
`uploadedBytes` | number

## Example

```typescript
import type { UploadStatusResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "parts": null,
  "uploadedBytes": null,
} satisfies UploadStatusResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UploadStatusResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


