
# BulkModelTablesRequest

Import several tables (across one or more schemas) in one call.

## Properties

Name | Type
------------ | -------------
`tables` | [Array&lt;ModelTableRequest&gt;](ModelTableRequest.md)

## Example

```typescript
import type { BulkModelTablesRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "tables": null,
} satisfies BulkModelTablesRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkModelTablesRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


