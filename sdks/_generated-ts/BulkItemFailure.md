
# BulkItemFailure

A single id that could not be applied, and why.

## Properties

Name | Type
------------ | -------------
`id` | string
`reason` | [BulkFailureReason](BulkFailureReason.md)

## Example

```typescript
import type { BulkItemFailure } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "reason": null,
} satisfies BulkItemFailure

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkItemFailure
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


