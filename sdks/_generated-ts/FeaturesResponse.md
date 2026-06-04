
# FeaturesResponse


## Properties

Name | Type
------------ | -------------
`googleLoginEnabled` | boolean
`microsoftLoginEnabled` | boolean
`githubLoginEnabled` | boolean
`smsLoginEnabled` | boolean
`defaultFrontendLanguage` | [SupportedLanguage](SupportedLanguage.md)

## Example

```typescript
import type { FeaturesResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "googleLoginEnabled": null,
  "microsoftLoginEnabled": null,
  "githubLoginEnabled": null,
  "smsLoginEnabled": null,
  "defaultFrontendLanguage": null,
} satisfies FeaturesResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FeaturesResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


