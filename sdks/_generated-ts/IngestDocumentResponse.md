
# IngestDocumentResponse

Response with workflow execution details.

## Properties

Name | Type
------------ | -------------
`workflowId` | string
`documentId` | string
`documentVersionId` | string

## Example

```typescript
import type { IngestDocumentResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "workflowId": null,
  "documentId": null,
  "documentVersionId": null,
} satisfies IngestDocumentResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IngestDocumentResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


