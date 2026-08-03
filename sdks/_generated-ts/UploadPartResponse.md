
# UploadPartResponse

Acknowledgement of one stored part.

## Properties

Name | Type
------------ | -------------
`partNumber` | number
`etag` | string
`size` | number

## Example

```typescript
import type { UploadPartResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "partNumber": null,
  "etag": null,
  "size": null,
} satisfies UploadPartResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UploadPartResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


