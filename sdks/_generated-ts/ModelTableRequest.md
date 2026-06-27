
# ModelTableRequest

Model a DB table as a queryable child of the connector.

## Properties

Name | Type
------------ | -------------
`tableName` | string
`schemaName` | string
`name` | string
`description` | string
`columnConfig` | [Array&lt;ColumnConfig&gt;](ColumnConfig.md)

## Example

```typescript
import type { ModelTableRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "tableName": null,
  "schemaName": null,
  "name": null,
  "description": null,
  "columnConfig": null,
} satisfies ModelTableRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelTableRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


