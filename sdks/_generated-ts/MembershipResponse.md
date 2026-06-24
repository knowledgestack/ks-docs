
# MembershipResponse


## Properties

Name | Type
------------ | -------------
`id` | string
`tenantId` | string
`groupId` | string
`userId` | string
`idpManaged` | boolean
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { MembershipResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "tenantId": null,
  "groupId": null,
  "userId": null,
  "idpManaged": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies MembershipResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MembershipResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


