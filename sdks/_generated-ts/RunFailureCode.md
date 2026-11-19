
# RunFailureCode

Why a run failed, as a stable code the frontend translates.  ``workflow_run.error`` keeps the raw detail for support; this is what a user is shown. Kept small on purpose: each value needs a message in every language the product ships.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { RunFailureCode } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
} satisfies RunFailureCode

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RunFailureCode
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


