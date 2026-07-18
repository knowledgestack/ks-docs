
# DefinitionOutputStat

Average output-document count for one workflow definition.

## Properties

Name | Type
------------ | -------------
`definitionId` | string
`name` | string
`completedRuns` | number
`avgDocuments` | number

## Example

```typescript
import type { DefinitionOutputStat } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "definitionId": null,
  "name": null,
  "completedRuns": null,
  "avgDocuments": null,
} satisfies DefinitionOutputStat

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DefinitionOutputStat
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


