
# DataSourceSchemaResponse

A schema PDO under a connector, with the readable tables it contains.

## Properties

Name | Type
------------ | -------------
`partType` | string
`id` | string
`pathPartId` | string
`parentPathPartId` | string
`materializedPath` | string
`tenantId` | string
`name` | string
`dataSourceId` | string
`schemaName` | string
`isDefault` | boolean
`description` | string
`approvalState` | [PathPartApprovalState](PathPartApprovalState.md)
`permissions` | [ItemPermissions](ItemPermissions.md)
`createdAt` | Date
`updatedAt` | Date
`tables` | [Array&lt;DataSourceTableResponse&gt;](DataSourceTableResponse.md)

## Example

```typescript
import type { DataSourceSchemaResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "partType": null,
  "id": null,
  "pathPartId": null,
  "parentPathPartId": null,
  "materializedPath": null,
  "tenantId": null,
  "name": null,
  "dataSourceId": null,
  "schemaName": null,
  "isDefault": null,
  "description": null,
  "approvalState": null,
  "permissions": null,
  "createdAt": null,
  "updatedAt": null,
  "tables": null,
} satisfies DataSourceSchemaResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DataSourceSchemaResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


