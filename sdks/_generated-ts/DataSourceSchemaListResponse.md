
# DataSourceSchemaListResponse

The source\'s user namespaces (PG schemas / MySQL databases).

## Properties

Name | Type
------------ | -------------
`schemas` | [Array&lt;DataSourceSchemaListItem&gt;](DataSourceSchemaListItem.md)

## Example

```typescript
import type { DataSourceSchemaListResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "schemas": null,
} satisfies DataSourceSchemaListResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DataSourceSchemaListResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


