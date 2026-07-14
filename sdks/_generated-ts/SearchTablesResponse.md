
# SearchTablesResponse

Ranked tables matching a summary search (readable by the caller).

## Properties

Name | Type
------------ | -------------
`results` | [Array&lt;TableSearchResult&gt;](TableSearchResult.md)

## Example

```typescript
import type { SearchTablesResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "results": null,
} satisfies SearchTablesResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchTablesResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


