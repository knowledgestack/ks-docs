
# DataSourceQueryRequest

A read-only SQL query the caller (or agent) wrote.

## Properties

Name | Type
------------ | -------------
`sql` | string
`maxRows` | number

## Example

```typescript
import type { DataSourceQueryRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "sql": null,
  "maxRows": null,
} satisfies DataSourceQueryRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DataSourceQueryRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


