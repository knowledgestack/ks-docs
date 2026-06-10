
# CatalogTableResponse


## Properties

Name | Type
------------ | -------------
`name` | string
`columns` | [Array&lt;CatalogColumnResponse&gt;](CatalogColumnResponse.md)

## Example

```typescript
import type { CatalogTableResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "columns": null,
} satisfies CatalogTableResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogTableResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


