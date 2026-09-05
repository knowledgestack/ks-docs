
# SearchSortOrder

Ordering for flat name search.  RELEVANCE ranks an exact name match first, then names starting with the query, then by how closely the name matches, then shorter names, then alphabetically.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { SearchSortOrder } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
} satisfies SearchSortOrder

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchSortOrder
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


