
# RecordRepoSaveSkipRequest


## Properties

Name | Type
------------ | -------------
`runId` | string
`reason` | [RepoSaveSkipReason](RepoSaveSkipReason.md)
`detail` | string

## Example

```typescript
import type { RecordRepoSaveSkipRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "runId": null,
  "reason": null,
  "detail": null,
} satisfies RecordRepoSaveSkipRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RecordRepoSaveSkipRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


