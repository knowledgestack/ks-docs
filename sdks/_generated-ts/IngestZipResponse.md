
# IngestZipResponse

Aggregate response from a ZIP ingestion batch.

## Properties

Name | Type
------------ | -------------
`files` | [Array&lt;ZipFileResult&gt;](ZipFileResult.md)
`totalFound` | number
`succeeded` | number
`skipped` | number
`failed` | number

## Example

```typescript
import type { IngestZipResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "files": null,
  "totalFound": null,
  "succeeded": null,
  "skipped": null,
  "failed": null,
} satisfies IngestZipResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IngestZipResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


