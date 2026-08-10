
# BulkRevokeRequest

Revoke many permissions by their own permission-row ids.

## Properties

Name | Type
------------ | -------------
`tenantId` | string
`permissionIds` | Array&lt;string&gt;

## Example

```typescript
import type { BulkRevokeRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "tenantId": null,
  "permissionIds": null,
} satisfies BulkRevokeRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkRevokeRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


