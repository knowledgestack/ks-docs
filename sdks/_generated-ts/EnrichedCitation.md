
# EnrichedCitation

Citation with optional document context, populated at read time.

## Properties

Name | Type
------------ | -------------
`chunkId` | string
`documentVersionId` | string
`sheetName` | string
`cellRanges` | Array&lt;string&gt;
`quote` | string
`startChar` | number
`length` | number
`startMs` | number
`endMs` | number
`documentId` | string
`documentName` | string
`versionNumber` | number
`pathPartId` | string
`materializedPath` | string

## Example

```typescript
import type { EnrichedCitation } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "chunkId": null,
  "documentVersionId": null,
  "sheetName": null,
  "cellRanges": null,
  "quote": null,
  "startChar": null,
  "length": null,
  "startMs": null,
  "endMs": null,
  "documentId": null,
  "documentName": null,
  "versionNumber": null,
  "pathPartId": null,
  "materializedPath": null,
} satisfies EnrichedCitation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EnrichedCitation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


