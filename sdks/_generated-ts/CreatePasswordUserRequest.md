
# CreatePasswordUserRequest


## Properties

Name | Type
------------ | -------------
`password` | string
`emailToken` | string
`firstName` | string
`lastName` | string

## Example

```typescript
import type { CreatePasswordUserRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "password": null,
  "emailToken": null,
  "firstName": null,
  "lastName": null,
} satisfies CreatePasswordUserRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatePasswordUserRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


