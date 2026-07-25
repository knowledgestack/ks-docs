
# UpdateSkillRequest

Edit working-copy files in place (does NOT cut a version).

## Properties

Name | Type
------------ | -------------
`skillMd` | string
`files` | [Array&lt;SkillFile&gt;](SkillFile.md)

## Example

```typescript
import type { UpdateSkillRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "skillMd": null,
  "files": null,
} satisfies UpdateSkillRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateSkillRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


