
# ActivateSkillVersionRequest

Activate a specific published version.

## Properties

Name | Type
------------ | -------------
`confirmDiscardUnpublished` | boolean

## Example

```typescript
import type { ActivateSkillVersionRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "confirmDiscardUnpublished": null,
} satisfies ActivateSkillVersionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ActivateSkillVersionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


