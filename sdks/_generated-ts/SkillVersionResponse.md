
# SkillVersionResponse

One published version of a skill.

## Properties

Name | Type
------------ | -------------
`versionId` | string
`version` | number
`contentSha256` | string
`isActive` | boolean
`createdAt` | Date

## Example

```typescript
import type { SkillVersionResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "versionId": null,
  "version": null,
  "contentSha256": null,
  "isActive": null,
  "createdAt": null,
} satisfies SkillVersionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SkillVersionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


