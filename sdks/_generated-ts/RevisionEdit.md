
# RevisionEdit

One tracked (un-accepted) change in a paragraph — the redline evidence.  ``type`` is ``added`` for an insertion (``w:ins``) and ``removed`` for a deletion (``w:del``). ``author``/``date`` are the proposer and timestamp the editor recorded (may be null). A block carries these so an auditor sees who proposed what, and so finalizing a pending change is never invisible.

## Properties

Name | Type
------------ | -------------
`type` | [BlockChangeType](BlockChangeType.md)
`author` | string
`date` | string
`text` | string

## Example

```typescript
import type { RevisionEdit } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "author": null,
  "date": null,
  "text": null,
} satisfies RevisionEdit

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RevisionEdit
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


