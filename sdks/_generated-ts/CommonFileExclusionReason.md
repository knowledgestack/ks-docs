
# CommonFileExclusionReason

Why a definition common file was left out of a run at Start.  Common files resolve resiliently (record-and-continue): an unresolvable one is excluded with one of these reasons rather than failing the run.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { CommonFileExclusionReason } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
} satisfies CommonFileExclusionReason

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CommonFileExclusionReason
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


