
# KbSummaryResponse

Point-in-time knowledge-base totals for a tenant.

## Properties

Name | Type
------------ | -------------
`documentsTotal` | number
`documentsByOrigin` | { [key: string]: number; }
`documentsByType` | { [key: string]: number; }
`documentVersionsTotal` | number
`chunksTotal` | number
`chunksByType` | { [key: string]: number; }
`tokensTotal` | number
`sectionsTotal` | number
`threadsTotal` | number
`messagesTotal` | number
`messagesByRole` | { [key: string]: number; }
`dataSourcesTotal` | number
`dataSourceTablesTotal` | number
`documentsCheckedOut` | number
`quota` | [Array&lt;MeteredQuotaStatus&gt;](MeteredQuotaStatus.md)
`feedbackUp` | number
`feedbackDown` | number

## Example

```typescript
import type { KbSummaryResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "documentsTotal": null,
  "documentsByOrigin": null,
  "documentsByType": null,
  "documentVersionsTotal": null,
  "chunksTotal": null,
  "chunksByType": null,
  "tokensTotal": null,
  "sectionsTotal": null,
  "threadsTotal": null,
  "messagesTotal": null,
  "messagesByRole": null,
  "dataSourcesTotal": null,
  "dataSourceTablesTotal": null,
  "documentsCheckedOut": null,
  "quota": null,
  "feedbackUp": null,
  "feedbackDown": null,
} satisfies KbSummaryResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as KbSummaryResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


