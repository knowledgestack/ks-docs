
# DataSourceTableResponse

Modeled-table response; a discriminated-union variant for listings.

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
`tableName` | string
`schemaName` | string
`description` | string
`columnConfig` | Array&lt;{ [key: string]: any; }&gt;
`approvalState` | [PathPartApprovalState](PathPartApprovalState.md)
`permissions` | [ItemPermissions](ItemPermissions.md)
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { DataSourceTableResponse } from '@knowledge-stack/ksapi'

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
  "tableName": null,
  "schemaName": null,
  "description": null,
  "columnConfig": null,
  "approvalState": null,
  "permissions": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies DataSourceTableResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DataSourceTableResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


