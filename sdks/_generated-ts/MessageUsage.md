
# MessageUsage

Token counts only — the run\'s model lives on ``details.model_id``.

## Properties

Name | Type
------------ | -------------
`inputTokens` | number
`outputTokens` | number

## Example

```typescript
import type { MessageUsage } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "inputTokens": null,
  "outputTokens": null,
} satisfies MessageUsage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MessageUsage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


