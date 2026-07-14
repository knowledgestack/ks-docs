
# SearchTablesRequest

Semantic search over connector table summaries (agent table discovery).

## Properties

Name | Type
------------ | -------------
`query` | string
`topK` | number
`scoreThreshold` | number
`dataSourceId` | string

## Example

```typescript
import type { SearchTablesRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "query": null,
  "topK": null,
  "scoreThreshold": null,
  "dataSourceId": null,
} satisfies SearchTablesRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchTablesRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


