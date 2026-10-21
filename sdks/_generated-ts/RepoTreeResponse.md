
# RepoTreeResponse


## Properties

Name | Type
------------ | -------------
`commit` | string
`entries` | [Array&lt;RepoTreeEntry&gt;](RepoTreeEntry.md)

## Example

```typescript
import type { RepoTreeResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "commit": null,
  "entries": null,
} satisfies RepoTreeResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RepoTreeResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


