
# OnboardingCompanyRequest

Step 1 of onboarding — tenant-wide company info. OWNER/ADMIN only.

## Properties

Name | Type
------------ | -------------
`description` | string
`industry` | string

## Example

```typescript
import type { OnboardingCompanyRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "description": null,
  "industry": null,
} satisfies OnboardingCompanyRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OnboardingCompanyRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


