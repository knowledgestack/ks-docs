
# DiffRow

One aligned side-by-side row.  ``left`` is the old version, ``right`` is the new. For ``equal`` both are present; ``delete`` has left only; ``insert`` has right only; ``replace`` has both plus ``left_spans`` / ``right_spans`` marking the changed words. Line numbers are 1-based and null on the absent side.

## Properties

Name | Type
------------ | -------------
`type` | [DiffRowType](DiffRowType.md)
`leftNo` | number
`left` | string
`rightNo` | number
`right` | string
`leftSpans` | [Array&lt;DiffSpan&gt;](DiffSpan.md)
`rightSpans` | [Array&lt;DiffSpan&gt;](DiffSpan.md)

## Example

```typescript
import type { DiffRow } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "leftNo": null,
  "left": null,
  "rightNo": null,
  "right": null,
  "leftSpans": null,
  "rightSpans": null,
} satisfies DiffRow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiffRow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


