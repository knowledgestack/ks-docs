
# DataSourceResponse

Connector response; a discriminated-union variant for folder listings.  The ``connection_config`` (host/port/credentials) is intentionally omitted — the password is write-only and never serialized back.

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
`engine` | [DataSourceEngine](DataSourceEngine.md)
`approvalState` | [PathPartApprovalState](PathPartApprovalState.md)
`owner` | [UserInfo](UserInfo.md)
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { DataSourceResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "partType": null,
  "id": null,
  "pathPartId": null,
  "parentPathPartId": null,
  "materializedPath": null,
  "tenantId": null,
  "name": null,
  "engine": null,
  "approvalState": null,
  "owner": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies DataSourceResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DataSourceResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


