
# RunTimeseriesResponse

Workflow runs bucketed over time.

## Properties

Name | Type
------------ | -------------
`timezone` | string
`bucket` | [TimeBucket](TimeBucket.md)
`points` | [Array&lt;TimeseriesPoint&gt;](TimeseriesPoint.md)

## Example

```typescript
import type { RunTimeseriesResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "timezone": null,
  "bucket": null,
  "points": null,
} satisfies RunTimeseriesResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RunTimeseriesResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


