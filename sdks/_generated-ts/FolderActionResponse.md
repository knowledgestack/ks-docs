
# FolderActionResponse

Response for folder action endpoints.

## Properties

Name | Type
------------ | -------------
`folderId` | string
`action` | [FolderAction](FolderAction.md)
`workflowId` | string

## Example

```typescript
import type { FolderActionResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "folderId": null,
  "action": null,
  "workflowId": null,
} satisfies FolderActionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FolderActionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


