
# DocumentVersionActionResponse

Response from a document version action.

## Properties

Name | Type
------------ | -------------
`versionId` | string
`action` | [DocumentVersionAction](DocumentVersionAction.md)
`workflowId` | string

## Example

```typescript
import type { DocumentVersionActionResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "versionId": null,
  "action": null,
  "workflowId": null,
} satisfies DocumentVersionActionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DocumentVersionActionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


