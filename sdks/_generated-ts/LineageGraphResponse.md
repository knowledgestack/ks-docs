
# LineageGraphResponse

Complete lineage graph with nodes and edges.

## Properties

Name | Type
------------ | -------------
`nodes` | [Array&lt;LineageNodeResponse&gt;](LineageNodeResponse.md)
`edges` | [Array&lt;LineageEdgeResponse&gt;](LineageEdgeResponse.md)

## Example

```typescript
import type { LineageGraphResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "nodes": null,
  "edges": null,
} satisfies LineageGraphResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LineageGraphResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


