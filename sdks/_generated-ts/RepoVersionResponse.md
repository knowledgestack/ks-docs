
# RepoVersionResponse

One saved version: a new main and the run that saved it.

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

## Example

```typescript
import type { RepoVersionResponse } from '@knowledge-stack/ksapi'

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
} satisfies RepoVersionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RepoVersionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


