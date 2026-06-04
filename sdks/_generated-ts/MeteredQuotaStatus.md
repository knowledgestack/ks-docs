
# MeteredQuotaStatus

Per-metric usage snapshot for the active period.

## Properties

Name | Type
------------ | -------------
`metric` | [UsageMetric](UsageMetric.md)
`used` | number
`limit` | number
`periodStart` | Date
`periodEnd` | Date
`additionalBalance` | number

## Example

```typescript
import type { MeteredQuotaStatus } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "metric": null,
  "used": null,
  "limit": null,
  "periodStart": null,
  "periodEnd": null,
  "additionalBalance": null,
} satisfies MeteredQuotaStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MeteredQuotaStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


