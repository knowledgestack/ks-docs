
# ExportSkillsRequest

Skills to pack into one ZIP, each under a top-level folder named after it.

## Properties

Name | Type
------------ | -------------
`skillIds` | Array&lt;string&gt;

## Example

```typescript
import type { ExportSkillsRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "skillIds": null,
} satisfies ExportSkillsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExportSkillsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


