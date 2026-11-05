
# UpdateEmailMessageRequest


## Properties

Name | Type
------------ | -------------
`title` | string
`recipients` | Array&lt;string&gt;
`ccRecipients` | Array&lt;string&gt;
`bccRecipients` | Array&lt;string&gt;
`content` | string

## Example

```typescript
import type { UpdateEmailMessageRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "title": null,
  "recipients": null,
  "ccRecipients": null,
  "bccRecipients": null,
  "content": null,
} satisfies UpdateEmailMessageRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateEmailMessageRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


