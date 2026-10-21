
# RepoBranchResponse

A retained run branch, independently of whether it reached main.

## Properties

Name | Type
------------ | -------------
`versionId` | string
`headSha` | string
`previousHeadSha` | string
`commitsAdded` | number
`runId` | string
`savedByUserId` | string
`savedAt` | Date
`instructionVersionId` | string
`candidateVersionId` | string
`branch` | string
`baseVersionId` | string
`integratedVersionId` | string
`integratedHeadSha` | string
`files` | [Array&lt;RepoTreeEntry&gt;](RepoTreeEntry.md)

## Example

```typescript
import type { RepoBranchResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "versionId": null,
  "headSha": null,
  "previousHeadSha": null,
  "commitsAdded": null,
  "runId": null,
  "savedByUserId": null,
  "savedAt": null,
  "instructionVersionId": null,
  "candidateVersionId": null,
  "branch": null,
  "baseVersionId": null,
  "integratedVersionId": null,
  "integratedHeadSha": null,
  "files": null,
} satisfies RepoBranchResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RepoBranchResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


