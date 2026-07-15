
# CreateSkillRequest

Author a skill from a SKILL.md bundle.

## Properties

Name | Type
------------ | -------------
`name` | string
`skillMd` | string
`scripts` | [Array&lt;SkillScriptFile&gt;](SkillScriptFile.md)

## Example

```typescript
import type { CreateSkillRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "skillMd": null,
  "scripts": null,
} satisfies CreateSkillRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateSkillRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


