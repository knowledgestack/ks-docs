
# LabeledSeries

A named series (e.g. one per document origin or ingestion outcome).

## Properties

Name | Type
------------ | -------------
`label` | string
`points` | [Array&lt;TimeseriesPoint&gt;](TimeseriesPoint.md)

## Example

```typescript
import type { LabeledSeries } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "label": null,
  "points": null,
} satisfies LabeledSeries

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LabeledSeries
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


