
# SignUpResponse


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
`department` | string
`bio` | string
`avatarUrl` | string
`onboardingCompletedAt` | Date
`joinMethod` | [TenantUserJoinMethod](TenantUserJoinMethod.md)
`onboardingState` | [OnboardingState](OnboardingState.md)
`invitedBy` | [UserInfo](UserInfo.md)
`addedBy` | [AddedBy](AddedBy.md)
`idpManagedFields` | Array&lt;string&gt;
`onboardingEnabled` | boolean
`inviteRejection` | [InviteRejection](InviteRejection.md)

## Example

```typescript
import type { SignUpResponse } from '@knowledge-stack/ksapi'

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
  "department": null,
  "bio": null,
  "avatarUrl": null,
  "onboardingCompletedAt": null,
  "joinMethod": null,
  "onboardingState": null,
  "invitedBy": null,
  "addedBy": null,
  "idpManagedFields": null,
  "onboardingEnabled": null,
  "inviteRejection": null,
} satisfies SignUpResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SignUpResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


