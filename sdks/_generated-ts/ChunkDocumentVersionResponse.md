
# ChunkDocumentVersionResponse

Lightweight document version info attached to a chunk response.

## Properties

Name | Type
------------ | -------------
`id` | string
`version` | number
`name` | string

## Example

```typescript
import type { ChunkDocumentVersionResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "version": null,
  "name": null,
} satisfies ChunkDocumentVersionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChunkDocumentVersionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


