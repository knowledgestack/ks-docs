
# SkillSearchResult

One skill matched by semantic search.

## Properties

Name | Type
------------ | -------------
`skillId` | string
`name` | string
`description` | string
`materializedPath` | string
`score` | number

## Example

```typescript
import type { SkillSearchResult } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "skillId": null,
  "name": null,
  "description": null,
  "materializedPath": null,
  "score": null,
} satisfies SkillSearchResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SkillSearchResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


