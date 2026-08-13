
# UploadConstraints


## Properties

Name | Type
------------ | -------------
`formats` | [Array&lt;UploadFormat&gt;](UploadFormat.md)
`maxBytes` | number
`maxImageBytes` | number
`maxMediaBytes` | number
`maxVideoBytes` | number
`maxMediaDurationMs` | number
`resumablePartSize` | number

## Example

```typescript
import type { UploadConstraints } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "formats": null,
  "maxBytes": null,
  "maxImageBytes": null,
  "maxMediaBytes": null,
  "maxVideoBytes": null,
  "maxMediaDurationMs": null,
  "resumablePartSize": null,
} satisfies UploadConstraints

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UploadConstraints
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


