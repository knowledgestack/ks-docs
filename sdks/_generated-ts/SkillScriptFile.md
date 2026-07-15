
# SkillScriptFile

A single script bundled under a skill\'s ``scripts/`` folder.

## Properties

Name | Type
------------ | -------------
`name` | string
`content` | string

## Example

```typescript
import type { SkillScriptFile } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "content": null,
} satisfies SkillScriptFile

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SkillScriptFile
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


