
# ThreadMessageContent


## Properties

Name | Type
------------ | -------------
`text` | string
`isError` | boolean
`citations` | [Array&lt;Citation&gt;](Citation.md)
`references` | [Array&lt;ResolvedReferenceInput&gt;](ResolvedReferenceInput.md)

## Example

```typescript
import type { ThreadMessageContent } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "text": null,
  "isError": null,
  "citations": null,
  "references": null,
} satisfies ThreadMessageContent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ThreadMessageContent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


