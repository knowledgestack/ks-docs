
# InviteLinkSettingsResponse

Tenant-wide invite-link settings (exposed via API).

## Properties

Name | Type
------------ | -------------
`enabled` | boolean
`role` | string
`groups` | Array&lt;string&gt;

## Example

```typescript
import type { InviteLinkSettingsResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "enabled": null,
  "role": null,
  "groups": null,
} satisfies InviteLinkSettingsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InviteLinkSettingsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


