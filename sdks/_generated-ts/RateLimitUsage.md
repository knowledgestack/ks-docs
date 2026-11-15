
# RateLimitUsage

A rate limit on the plan allowance and how much of it this interval has used.

## Properties

Name | Type
------------ | -------------
`resetInterval` | string
`appliesPerUser` | boolean
`maxUnits` | number
`used` | number
`resetsAt` | Date

## Example

```typescript
import type { RateLimitUsage } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "resetInterval": P1M,
  "appliesPerUser": null,
  "maxUnits": null,
  "used": null,
  "resetsAt": null,
} satisfies RateLimitUsage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RateLimitUsage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


