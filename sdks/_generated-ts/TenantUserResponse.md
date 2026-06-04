
# TenantUserResponse

Tenant member response model.

## Properties

Name | Type
------------ | -------------
`userId` | string
`email` | string
`firstName` | string
`lastName` | string
`role` | [TenantUserRole](TenantUserRole.md)
`department` | string
`jobTitle` | string
`deactivatedOn` | Date
`isTenantIdpManaged` | boolean
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { TenantUserResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "userId": null,
  "email": null,
  "firstName": null,
  "lastName": null,
  "role": null,
  "department": null,
  "jobTitle": null,
  "deactivatedOn": null,
  "isTenantIdpManaged": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies TenantUserResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TenantUserResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


