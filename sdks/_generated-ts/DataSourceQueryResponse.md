
# DataSourceQueryResponse

Read-only query result. ``generated_sql`` echoes the executed SQL.

## Properties

Name | Type
------------ | -------------
`columns` | Array&lt;string&gt;
`rows` | Array&lt;Array&lt;any&gt;&gt;
`rowCount` | number
`truncated` | boolean
`generatedSql` | string

## Example

```typescript
import type { DataSourceQueryResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "columns": null,
  "rows": null,
  "rowCount": null,
  "truncated": null,
  "generatedSql": null,
} satisfies DataSourceQueryResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DataSourceQueryResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


