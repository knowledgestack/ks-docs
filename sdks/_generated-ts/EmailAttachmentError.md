
# EmailAttachmentError


## Properties

Name | Type
------------ | -------------
`filename` | string
`error` | string

## Example

```typescript
import type { EmailAttachmentError } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "filename": null,
  "error": null,
} satisfies EmailAttachmentError

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmailAttachmentError
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


