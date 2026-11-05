
# BulkGrantItem

One requested grant: permission flags on an object (PDO id) for a user.

## Properties

Name | Type
------------ | -------------
`canRead` | boolean
`canWrite` | boolean
`canDelete` | boolean
`canApprove` | boolean
`canGrantPermissions` | boolean
`userId` | string
`objectId` | string

## Example

```typescript
import type { BulkGrantItem } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "canRead": null,
  "canWrite": null,
  "canDelete": null,
  "canApprove": null,
  "canGrantPermissions": null,
  "userId": null,
  "objectId": null,
} satisfies BulkGrantItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkGrantItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


