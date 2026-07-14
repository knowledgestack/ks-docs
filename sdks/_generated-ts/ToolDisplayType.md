
# ToolDisplayType

Language-neutral render category for a completed tool call.  The frontend keys its activity-card registry on this token and localizes the label itself (zh/en) — the server never emits human prose here. Unknown or unmapped tools fall back to ``GENERIC`` so a new/dev tool degrades to the generic card instead of breaking rendering.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { ToolDisplayType } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
} satisfies ToolDisplayType

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ToolDisplayType
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


