
# TableSearchResult

A modeled table matched by summary search, with its query coordinates.

## Properties

Name | Type
------------ | -------------
`dataSourceId` | string
`tableId` | string
`schemaName` | string
`tableName` | string
`name` | string
`summary` | string
`score` | number

## Example

```typescript
import type { TableSearchResult } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "dataSourceId": null,
  "tableId": null,
  "schemaName": null,
  "tableName": null,
  "name": null,
  "summary": null,
  "score": null,
} satisfies TableSearchResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TableSearchResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


