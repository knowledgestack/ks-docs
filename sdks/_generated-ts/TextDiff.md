
# TextDiff

A computed side-by-side diff of two texts.

## Properties

Name | Type
------------ | -------------
`rows` | [Array&lt;DiffRow&gt;](DiffRow.md)
`added` | number
`removed` | number
`changed` | number
`truncated` | boolean

## Example

```typescript
import type { TextDiff } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "rows": null,
  "added": null,
  "removed": null,
  "changed": null,
  "truncated": null,
} satisfies TextDiff

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TextDiff
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


