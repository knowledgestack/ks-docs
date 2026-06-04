
# InviteLinkSettingsRequest

Partial invite-link settings update.  ``role`` is constrained to USER/ADMIN by the shared ``InviteLinkRole`` Literal — Pydantic raises a 422 for any other value.

## Properties

Name | Type
------------ | -------------
`enabled` | boolean
`role` | string
`groups` | Array&lt;string&gt;

## Example

```typescript
import type { InviteLinkSettingsRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "enabled": null,
  "role": null,
  "groups": null,
} satisfies InviteLinkSettingsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InviteLinkSettingsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


