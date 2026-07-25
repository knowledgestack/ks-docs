
# SkillFile

One file in a skill bundle, at a path relative to the skill root.  Skills carry arbitrary trees (``scripts/office/validate.py``, ``references/guide.md``, ``assets/logo.png``), so binary files are carried base64-encoded rather than excluded.

## Properties

Name | Type
------------ | -------------
`path` | string
`content` | string
`encoding` | string

## Example

```typescript
import type { SkillFile } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "path": null,
  "content": null,
  "encoding": null,
} satisfies SkillFile

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SkillFile
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


