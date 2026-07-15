
# SearchSkillsRequest

Semantic skill discovery for the agent.

## Properties

Name | Type
------------ | -------------
`query` | string
`topK` | number
`scoreThreshold` | number

## Example

```typescript
import type { SearchSkillsRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "query": null,
  "topK": null,
  "scoreThreshold": null,
} satisfies SearchSkillsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchSkillsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


