
# CellChange

One changed spreadsheet cell (``old`` is null for added, ``new`` for removed).  ``old``/``new`` are the displayed values (cached result for a formula cell); ``*_formula`` carry the formula text so a formula edit is visible even when the computed value is unchanged. ``formatting_changed`` flags a bold/colour/ number-format change on an otherwise unchanged cell.

## Properties

Name | Type
------------ | -------------
`sheet` | string
`address` | string
`old` | string
`_new` | string
`type` | [CellChangeType](CellChangeType.md)
`oldFormula` | string
`newFormula` | string
`formulaChanged` | boolean
`formattingChanged` | boolean
`commentChanged` | boolean
`oldComment` | string
`newComment` | string

## Example

```typescript
import type { CellChange } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "sheet": null,
  "address": null,
  "old": null,
  "_new": null,
  "type": null,
  "oldFormula": null,
  "newFormula": null,
  "formulaChanged": null,
  "formattingChanged": null,
  "commentChanged": null,
  "oldComment": null,
  "newComment": null,
} satisfies CellChange

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CellChange
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


