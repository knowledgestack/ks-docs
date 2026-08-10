
# BulkGrantSuccess

A grant that was created, keyed on its (user, object) pair plus new id.

## Properties

Name | Type
------------ | -------------
`userId` | string
`objectId` | string
`permissionId` | string
`capability` | [PermissionCapability](PermissionCapability.md)
`canApprove` | boolean

## Example

```typescript
import type { BulkGrantSuccess } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "userId": null,
  "objectId": null,
  "permissionId": null,
  "capability": null,
  "canApprove": null,
} satisfies BulkGrantSuccess

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkGrantSuccess
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


