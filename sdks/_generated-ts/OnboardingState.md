
# OnboardingState

Stored state: keys and steps this release does not know are dropped.

## Properties

Name | Type
------------ | -------------
`currentStep` | [OnboardingStep](OnboardingStep.md)
`guideModules` | [GuideModules](GuideModules.md)
`setupChecklistDismissed` | boolean

## Example

```typescript
import type { OnboardingState } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "currentStep": null,
  "guideModules": null,
  "setupChecklistDismissed": null,
} satisfies OnboardingState

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OnboardingState
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


