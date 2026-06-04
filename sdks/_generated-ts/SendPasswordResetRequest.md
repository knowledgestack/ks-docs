
# SendPasswordResetRequest


## Properties

Name | Type
------------ | -------------
`method` | string
`email` | string
`phoneNumber` | string

## Example

```typescript
import type { SendPasswordResetRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "method": null,
  "email": null,
  "phoneNumber": null,
} satisfies SendPasswordResetRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SendPasswordResetRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


