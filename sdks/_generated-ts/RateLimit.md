
# RateLimit

At most ``max_units`` of a plan allowance spent per ``reset_interval``.  Intervals step from the tenant\'s cycle start, like allowance windows. A rate limit grants nothing: it paces the allowance, and purchased top-ups are drawn past it.

## Properties

Name | Type
------------ | -------------
`resetInterval` | string
`appliesPerUser` | boolean
`maxUnits` | number

## Example

```typescript
import type { RateLimit } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "resetInterval": P1M,
  "appliesPerUser": null,
  "maxUnits": null,
} satisfies RateLimit

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RateLimit
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


