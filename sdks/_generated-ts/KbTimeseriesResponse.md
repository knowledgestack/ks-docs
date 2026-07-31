
# KbTimeseriesResponse

A knowledge-base metric bucketed over time.  ``series`` carries one entry per split — two (SOURCE / GENERATED) for ``document_uploads``, one for the ingestion, message, and search metrics.

## Properties

Name | Type
------------ | -------------
`metric` | [KbMetric](KbMetric.md)
`timezone` | string
`bucket` | [TimeBucket](TimeBucket.md)
`series` | [Array&lt;LabeledSeries&gt;](LabeledSeries.md)

## Example

```typescript
import type { KbTimeseriesResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "metric": null,
  "timezone": null,
  "bucket": null,
  "series": null,
} satisfies KbTimeseriesResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as KbTimeseriesResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


