
# DocumentCheckoutResponse

Active checkout state on a document.

## Properties

Name | Type
------------ | -------------
`tenantId` | string
`documentId` | string
`holder` | [UserInfo](UserInfo.md)
`acquiredAt` | Date

## Example

```typescript
import type { DocumentCheckoutResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "tenantId": null,
  "documentId": null,
  "holder": null,
  "acquiredAt": null,
} satisfies DocumentCheckoutResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DocumentCheckoutResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


