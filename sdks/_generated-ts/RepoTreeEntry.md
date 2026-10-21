
# RepoTreeEntry


## Properties

Name | Type
------------ | -------------
`path` | string
`size` | number
`isBinary` | boolean

## Example

```typescript
import type { RepoTreeEntry } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "path": null,
  "size": null,
  "isBinary": null,
} satisfies RepoTreeEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RepoTreeEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


