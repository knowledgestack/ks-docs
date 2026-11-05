
# EmailRemovedResponse

What the removal actually trashed, for the run\'s own summary.  Counts rather than a receipt per id: a retried activity and a re-reported removal both arrive asking for mail that has already gone, which is not an error and not worth a line each.

## Properties

Name | Type
------------ | -------------
`removed` | number
`conversationsRemoved` | number

## Example

```typescript
import type { EmailRemovedResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "removed": null,
  "conversationsRemoved": null,
} satisfies EmailRemovedResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmailRemovedResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


