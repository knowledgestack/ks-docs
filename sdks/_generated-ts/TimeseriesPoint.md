
# TimeseriesPoint

One bucket of a time series.

## Properties

Name | Type
------------ | -------------
`bucketStart` | Date
`count` | number

## Example

```typescript
import type { TimeseriesPoint } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "bucketStart": null,
  "count": null,
} satisfies TimeseriesPoint

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TimeseriesPoint
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


