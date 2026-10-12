
# GuideModuleProgress


## Properties

Name | Type
------------ | -------------
`status` | [GuideModuleStatus](GuideModuleStatus.md)
`step` | number
`version` | number
`completedAt` | Date

## Example

```typescript
import type { GuideModuleProgress } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "step": null,
  "version": null,
  "completedAt": null,
} satisfies GuideModuleProgress

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GuideModuleProgress
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


