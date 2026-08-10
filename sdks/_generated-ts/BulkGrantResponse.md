
# BulkGrantResponse

Per-item outcome of a bulk grant (composite-keyed, unlike other bulks).

## Properties

Name | Type
------------ | -------------
`succeeded` | [Array&lt;BulkGrantSuccess&gt;](BulkGrantSuccess.md)
`failed` | [Array&lt;BulkGrantItemFailure&gt;](BulkGrantItemFailure.md)

## Example

```typescript
import type { BulkGrantResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "succeeded": null,
  "failed": null,
} satisfies BulkGrantResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkGrantResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


