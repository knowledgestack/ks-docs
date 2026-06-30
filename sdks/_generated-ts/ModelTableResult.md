
# ModelTableResult

Per-item outcome of a bulk table import.

## Properties

Name | Type
------------ | -------------
`tableName` | string
`schemaName` | string
`status` | string
`table` | [DataSourceTableResponse](DataSourceTableResponse.md)
`error` | string

## Example

```typescript
import type { ModelTableResult } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "tableName": null,
  "schemaName": null,
  "status": null,
  "table": null,
  "error": null,
} satisfies ModelTableResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelTableResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


