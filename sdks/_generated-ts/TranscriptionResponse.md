
# TranscriptionResponse

A spoken clip rendered as text, ready to send as a chat message.

## Properties

Name | Type
------------ | -------------
`text` | string
`language` | string

## Example

```typescript
import type { TranscriptionResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "text": 请帮我总结这份文档,
  "language": zh,
} satisfies TranscriptionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TranscriptionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


