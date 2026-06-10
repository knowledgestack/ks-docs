
# CreatePermissionRequest


## Properties

Name | Type
------------ | -------------
`tenantId` | string
`userId` | string
`pathPartId` | string
`capability` | [PermissionCapability](PermissionCapability.md)
`canApprove` | boolean

## Example

```typescript
import type { CreatePermissionRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "tenantId": null,
  "userId": null,
  "pathPartId": null,
  "capability": null,
  "canApprove": null,
} satisfies CreatePermissionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatePermissionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


