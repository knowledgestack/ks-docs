
# CellDiff

A cell-level diff of two spreadsheet versions.

## Properties

Name | Type
------------ | -------------
`changes` | [Array&lt;CellChange&gt;](CellChange.md)
`added` | number
`removed` | number
`modified` | number
`truncated` | boolean

## Example

```typescript
import type { CellDiff } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "changes": null,
  "added": null,
  "removed": null,
  "modified": null,
  "truncated": null,
} satisfies CellDiff

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CellDiff
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


