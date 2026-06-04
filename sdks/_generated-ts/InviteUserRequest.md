
# InviteUserRequest


## Properties

Name | Type
------------ | -------------
`tenantId` | string
`email` | string
`role` | [TenantUserRole](TenantUserRole.md)
`groups` | Array&lt;string&gt;

## Example

```typescript
import type { InviteUserRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "tenantId": null,
  "email": null,
  "role": null,
  "groups": null,
} satisfies InviteUserRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InviteUserRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


