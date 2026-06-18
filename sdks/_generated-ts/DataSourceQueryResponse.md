
# DataSourceQueryResponse

Read-only query result. ``generated_sql`` echoes the executed SQL.  ``sql_validation_warnings`` lists non-blocking semantic-lint findings (e.g. aggregate without a filter, fan-out join); empty when the SQL is clean. The query still runs and returns rows regardless of warnings.

## Properties

Name | Type
------------ | -------------
`columns` | Array&lt;string&gt;
`rows` | Array&lt;Array&lt;any&gt;&gt;
`rowCount` | number
`truncated` | boolean
`generatedSql` | string
`sqlValidationWarnings` | Array&lt;string&gt;

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
  "sqlValidationWarnings": null,
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


