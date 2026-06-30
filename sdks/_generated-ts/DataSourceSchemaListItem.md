
# DataSourceSchemaListItem

A namespace discovered by live introspection (not a persisted PDO).

## Properties

Name | Type
------------ | -------------
`name` | string
`isDefault` | boolean

## Example

```typescript
import type { DataSourceSchemaListItem } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "isDefault": null,
} satisfies DataSourceSchemaListItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DataSourceSchemaListItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


