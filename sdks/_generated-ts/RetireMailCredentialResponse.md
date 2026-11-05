
# RetireMailCredentialResponse

What deleting a registration took with it.  The count is the point of answering at all: the admin saw ``mailbox_count`` before pressing, and this says what was actually acted on. A 204 would leave them to go and look.

## Properties

Name | Type
------------ | -------------
`mailboxesDisabled` | number

## Example

```typescript
import type { RetireMailCredentialResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "mailboxesDisabled": null,
} satisfies RetireMailCredentialResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RetireMailCredentialResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


