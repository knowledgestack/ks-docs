
# GuideModules


## Properties

Name | Type
------------ | -------------
`core` | [GuideModuleProgress](GuideModuleProgress.md)
`groundedAnswers` | [GuideModuleProgress](GuideModuleProgress.md)
`knowledge` | [GuideModuleProgress](GuideModuleProgress.md)
`repeatableWork` | [GuideModuleProgress](GuideModuleProgress.md)
`access` | [GuideModuleProgress](GuideModuleProgress.md)
`administration` | [GuideModuleProgress](GuideModuleProgress.md)
`documents` | [GuideModuleProgress](GuideModuleProgress.md)
`workflowRuns` | [GuideModuleProgress](GuideModuleProgress.md)
`search` | [GuideModuleProgress](GuideModuleProgress.md)
`workflowSetup` | [GuideModuleProgress](GuideModuleProgress.md)
`skills` | [GuideModuleProgress](GuideModuleProgress.md)
`dashboard` | [GuideModuleProgress](GuideModuleProgress.md)
`groups` | [GuideModuleProgress](GuideModuleProgress.md)
`auditLog` | [GuideModuleProgress](GuideModuleProgress.md)

## Example

```typescript
import type { GuideModules } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "core": null,
  "groundedAnswers": null,
  "knowledge": null,
  "repeatableWork": null,
  "access": null,
  "administration": null,
  "documents": null,
  "workflowRuns": null,
  "search": null,
  "workflowSetup": null,
  "skills": null,
  "dashboard": null,
  "groups": null,
  "auditLog": null,
} satisfies GuideModules

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GuideModules
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


