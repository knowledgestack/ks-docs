
# DataSourceSyncResponse

Result of reconciling modeled tables against the live external catalog.

## Properties

Name | Type
------------ | -------------
`dataSourceId` | string
`updated` | number
`unchanged` | number
`deleted` | number

## Example

```typescript
import type { DataSourceSyncResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "dataSourceId": null,
  "updated": null,
  "unchanged": null,
  "deleted": null,
} satisfies DataSourceSyncResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DataSourceSyncResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


