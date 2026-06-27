
# ColumnReference

The table+column a foreign-key column points at.

## Properties

Name | Type
------------ | -------------
`schemaName` | string
`table` | string
`column` | string

## Example

```typescript
import type { ColumnReference } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "schemaName": null,
  "table": null,
  "column": null,
} satisfies ColumnReference

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ColumnReference
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


