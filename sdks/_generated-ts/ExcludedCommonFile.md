
# ExcludedCommonFile

A definition common file that could not be applied to a run at Start.  Common files resolve resiliently (record-and-continue): one that is missing/deleted or unreadable by the run-starter is recorded here rather than failing the run, so the exclusion is auditable and visible to the FE.

## Properties

Name | Type
------------ | -------------
`pathPartId` | string
`reason` | [CommonFileExclusionReason](CommonFileExclusionReason.md)

## Example

```typescript
import type { ExcludedCommonFile } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "pathPartId": null,
  "reason": null,
} satisfies ExcludedCommonFile

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExcludedCommonFile
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


