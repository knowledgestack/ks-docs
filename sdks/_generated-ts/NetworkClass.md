
# NetworkClass

Egress reachability class for an API connection.  PUBLIC is SSRF-guarded (private/internal ranges blocked); INTERNAL allows private/cluster targets and bypasses the range check.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { NetworkClass } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
} satisfies NetworkClass

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NetworkClass
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


