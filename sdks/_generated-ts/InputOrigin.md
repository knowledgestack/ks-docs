
# InputOrigin

Where a run-snapshot input came from, for auditability.  A run\'s pinned inputs are merged from three sources at Start; this tags each so an auditor / the FE can tell a definition-mandated common file apart from a file the run\'s creator chose.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { InputOrigin } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
} satisfies InputOrigin

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InputOrigin
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


