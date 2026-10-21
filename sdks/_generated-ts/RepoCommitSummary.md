
# RepoCommitSummary


## Properties

Name | Type
------------ | -------------
`sha` | string
`subject` | string
`authoredAt` | Date
`runId` | string
`savedByUserId` | string

## Example

```typescript
import type { RepoCommitSummary } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "sha": null,
  "subject": null,
  "authoredAt": null,
  "runId": null,
  "savedByUserId": null,
} satisfies RepoCommitSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RepoCommitSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


