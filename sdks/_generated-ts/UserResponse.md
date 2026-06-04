
# UserResponse


## Properties

Name | Type
------------ | -------------
`id` | string
`email` | string
`phoneNumber` | string
`firstName` | string
`lastName` | string
`idpType` | [IdpType](IdpType.md)
`currentTenantId` | string
`currentTenantRole` | [TenantUserRole](TenantUserRole.md)
`defaultTenantId` | string
`jobTitle` | string
`onboardingCompletedAt` | Date

## Example

```typescript
import type { UserResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "email": null,
  "phoneNumber": null,
  "firstName": null,
  "lastName": null,
  "idpType": null,
  "currentTenantId": null,
  "currentTenantRole": null,
  "defaultTenantId": null,
  "jobTitle": null,
  "onboardingCompletedAt": null,
} satisfies UserResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


