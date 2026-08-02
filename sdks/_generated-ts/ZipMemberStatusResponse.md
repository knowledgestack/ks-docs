
# ZipMemberStatusResponse

One member\'s outcome within a ZIP fan-out (from the workflow query).

## Properties

Name | Type
------------ | -------------
`zipPath` | string
`documentId` | string
`documentVersionId` | string
`workflowId` | string
`error` | string
`skipped` | boolean

## Example

```typescript
import type { ZipMemberStatusResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "zipPath": null,
  "documentId": null,
  "documentVersionId": null,
  "workflowId": null,
  "error": null,
  "skipped": null,
} satisfies ZipMemberStatusResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ZipMemberStatusResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


