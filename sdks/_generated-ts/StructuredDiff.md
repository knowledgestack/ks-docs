
# StructuredDiff

A key-path diff of two JSON/YAML versions.  ``added``/``removed``/``modified`` are full totals; ``changes`` is capped at the engine limit and ``omitted`` reports exactly how many were dropped, so a truncated diff never silently hides a change.

## Properties

Name | Type
------------ | -------------
`changes` | [Array&lt;StructuredChange&gt;](StructuredChange.md)
`added` | number
`removed` | number
`modified` | number
`truncated` | boolean
`omitted` | number

## Example

```typescript
import type { StructuredDiff } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "changes": null,
  "added": null,
  "removed": null,
  "modified": null,
  "truncated": null,
  "omitted": null,
} satisfies StructuredDiff

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StructuredDiff
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


