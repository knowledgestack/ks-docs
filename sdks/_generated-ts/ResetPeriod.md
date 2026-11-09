
# ResetPeriod

How often a plan\'s periodic allowance is re-granted (not the billing interval).  Every allowance resets monthly; ``daily`` and ``weekly`` stay only as labels of the database type, which the plan writers refuse.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { ResetPeriod } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
} satisfies ResetPeriod

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ResetPeriod
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


