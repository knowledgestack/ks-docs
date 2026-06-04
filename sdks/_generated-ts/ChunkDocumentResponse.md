
# ChunkDocumentResponse

Lightweight document info attached to a chunk response.

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`documentType` | [DocumentType](DocumentType.md)
`documentOrigin` | [DocumentOrigin](DocumentOrigin.md)

## Example

```typescript
import type { ChunkDocumentResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "documentType": null,
  "documentOrigin": null,
} satisfies ChunkDocumentResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChunkDocumentResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


