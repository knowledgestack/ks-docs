
# CreatePhonePasswordUserRequest

Phone signup — the phone is retrieved from the validation record.

## Properties

Name | Type
------------ | -------------
`password` | string
`code` | string
`phoneValidationId` | string
`firstName` | string
`lastName` | string

## Example

```typescript
import type { CreatePhonePasswordUserRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "password": null,
  "code": null,
  "phoneValidationId": null,
  "firstName": null,
  "lastName": null,
} satisfies CreatePhonePasswordUserRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatePhonePasswordUserRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


