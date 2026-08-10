
# BulkOperationResponse

Per-item outcome of a bulk operation keyed on a single PDO id.

## Properties

Name | Type
------------ | -------------
`succeeded` | Array&lt;string&gt;
`failed` | [Array&lt;BulkItemFailure&gt;](BulkItemFailure.md)

## Example

```typescript
import type { BulkOperationResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "succeeded": null,
  "failed": null,
} satisfies BulkOperationResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkOperationResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


