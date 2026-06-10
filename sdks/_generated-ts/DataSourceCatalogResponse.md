
# DataSourceCatalogResponse

Live introspection of the external DB (pick tables to model from here).

## Properties

Name | Type
------------ | -------------
`tables` | [Array&lt;CatalogTableResponse&gt;](CatalogTableResponse.md)

## Example

```typescript
import type { DataSourceCatalogResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "tables": null,
} satisfies DataSourceCatalogResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DataSourceCatalogResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


