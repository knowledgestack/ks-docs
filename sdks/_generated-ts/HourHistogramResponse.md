
# HourHistogramResponse

Workflow runs by hour-of-day (0-23) in the resolved timezone.

## Properties

Name | Type
------------ | -------------
`timezone` | string
`countsByHour` | Array&lt;number&gt;

## Example

```typescript
import type { HourHistogramResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "timezone": null,
  "countsByHour": null,
} satisfies HourHistogramResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HourHistogramResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


