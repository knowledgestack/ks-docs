
# GroupPermissionResponse


## Properties

Name | Type
------------ | -------------
`id` | string
`tenantId` | string
`groupId` | string
`pathPartId` | string
`materializedPath` | string
`capability` | [PermissionCapability](PermissionCapability.md)
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { GroupPermissionResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "tenantId": null,
  "groupId": null,
  "pathPartId": null,
  "materializedPath": null,
  "capability": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies GroupPermissionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GroupPermissionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


