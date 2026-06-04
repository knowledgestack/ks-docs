
# TenantSettingsResponse

Tenant settings as exposed via API (no internal S3 URIs).

## Properties

Name | Type
------------ | -------------
`language` | [SupportedLanguage](SupportedLanguage.md)
`description` | string
`industry` | string
`timezone` | string
`displayName` | [DisplayNameFormat](DisplayNameFormat.md)
`inviteLink` | [InviteLinkSettingsResponse](InviteLinkSettingsResponse.md)

## Example

```typescript
import type { TenantSettingsResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "language": null,
  "description": null,
  "industry": null,
  "timezone": null,
  "displayName": null,
  "inviteLink": null,
} satisfies TenantSettingsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TenantSettingsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


