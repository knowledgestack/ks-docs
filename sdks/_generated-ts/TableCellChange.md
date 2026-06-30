
# TableCellChange

One changed table cell (``old`` null for added, ``new`` for removed).

## Properties

Name | Type
------------ | -------------
`row` | number
`col` | number
`type` | [BlockChangeType](BlockChangeType.md)
`old` | string
`_new` | string

## Example

```typescript
import type { TableCellChange } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "row": null,
  "col": null,
  "type": null,
  "old": null,
  "_new": null,
} satisfies TableCellChange

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TableCellChange
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


