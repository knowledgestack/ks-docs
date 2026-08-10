
# BulkFailureReason

Why a single item in a bulk operation was not applied.  Every value is produced by a specific, pre-checked gate — an *unexpected* per-item error is deliberately not caught (it surfaces as a 500) rather than hidden behind a vague catch-all.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { BulkFailureReason } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
} satisfies BulkFailureReason

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkFailureReason
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


