
# WorkflowRepoResponse

The workflow\'s repository at its current ``main``.

## Properties

Name | Type
------------ | -------------
`name` | string
`_exists` | boolean
`versionId` | string
`head` | [RepoCommitSummary](RepoCommitSummary.md)
`fileCount` | number
`totalBytes` | number
`commitCount` | number
`updatedAt` | Date
`writableByMe` | boolean
`instructionVersionId` | string

## Example

```typescript
import type { WorkflowRepoResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "_exists": null,
  "versionId": null,
  "head": null,
  "fileCount": null,
  "totalBytes": null,
  "commitCount": null,
  "updatedAt": null,
  "writableByMe": null,
  "instructionVersionId": null,
} satisfies WorkflowRepoResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkflowRepoResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


