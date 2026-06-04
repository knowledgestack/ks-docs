
# CreateDocumentRequest

Request to create a new document.

## Properties

Name | Type
------------ | -------------
`name` | string
`parentPathPartId` | string
`documentType` | [DocumentType](DocumentType.md)
`documentOrigin` | [DocumentOrigin](DocumentOrigin.md)

## Example

```typescript
import type { CreateDocumentRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "parentPathPartId": null,
  "documentType": null,
  "documentOrigin": null,
} satisfies CreateDocumentRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateDocumentRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


