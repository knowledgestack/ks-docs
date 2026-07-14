
# DataSourceDescribeResponse

Result of (re)describing a connector\'s modeled tables.  Each modeled table gets a one-line summary embedded as a single Qdrant point for the agent\'s table search. Counts report how many tables were (re)summarized and (re)embedded this call; unchanged tables are skipped (the embed is content-hash gated), so a repeat call reports zeros.

## Properties

Name | Type
------------ | -------------
`dataSourceId` | string
`tablesTotal` | number
`summarized` | number
`embedded` | number

## Example

```typescript
import type { DataSourceDescribeResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "dataSourceId": null,
  "tablesTotal": null,
  "summarized": null,
  "embedded": null,
} satisfies DataSourceDescribeResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DataSourceDescribeResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


