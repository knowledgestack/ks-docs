
# VersionDiffResponse

The diff between two document versions.  ``format`` selects the populated payload: ``text`` (side-by-side line diff, for Word/PDF/text) or ``cells`` (cell-level diff, for spreadsheets).

## Properties

Name | Type
------------ | -------------
`fromVersionId` | string
`toVersionId` | string
`fromVersion` | number
`toVersion` | number
`format` | [DiffFormat](DiffFormat.md)
`text` | [TextDiff](TextDiff.md)
`cells` | [CellDiff](CellDiff.md)

## Example

```typescript
import type { VersionDiffResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "fromVersionId": null,
  "toVersionId": null,
  "fromVersion": null,
  "toVersion": null,
  "format": null,
  "text": null,
  "cells": null,
} satisfies VersionDiffResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VersionDiffResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


