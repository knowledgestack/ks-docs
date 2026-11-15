
# ScheduledChange

A plan change already scheduled for the subscription\'s period end.

## Properties

Name | Type
------------ | -------------
`plan` | string
`seats` | number
`at` | Date

## Example

```typescript
import type { ScheduledChange } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "plan": null,
  "seats": null,
  "at": null,
} satisfies ScheduledChange

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScheduledChange
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


