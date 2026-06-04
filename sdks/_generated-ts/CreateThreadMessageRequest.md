
# CreateThreadMessageRequest


## Properties

Name | Type
------------ | -------------
`messageId` | string
`role` | [MessageRole](MessageRole.md)
`content` | [ThreadMessageContent](ThreadMessageContent.md)
`details` | [ThreadMessageDetailsInput](ThreadMessageDetailsInput.md)

## Example

```typescript
import type { CreateThreadMessageRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "messageId": null,
  "role": null,
  "content": null,
  "details": null,
} satisfies CreateThreadMessageRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateThreadMessageRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


