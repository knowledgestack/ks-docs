
# OnboardingProfileRequest

Step 2 of onboarding — per-user info for the current tenant.

## Properties

Name | Type
------------ | -------------
`firstName` | string
`lastName` | string
`jobTitle` | string

## Example

```typescript
import type { OnboardingProfileRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "firstName": null,
  "lastName": null,
  "jobTitle": null,
} satisfies OnboardingProfileRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OnboardingProfileRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


