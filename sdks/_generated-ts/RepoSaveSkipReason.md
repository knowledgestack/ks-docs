
# RepoSaveSkipReason

Why retention or integration could not complete.  ``conflict``: integration failed; a retained branch remains recoverable. ``history_rewrite``: the run rewrote saved history. ``no_write``: the turn\'s user cannot write the workflow. ``uncommitted``: changes were never committed to the assigned branch. ``rejected``: the platform refused the bundle (too large, unsafe paths). ``failed``: the checkout or the save itself failed.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { RepoSaveSkipReason } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
} satisfies RepoSaveSkipReason

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RepoSaveSkipReason
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


