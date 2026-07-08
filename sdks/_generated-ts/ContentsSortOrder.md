
# ContentsSortOrder

Sort options for the folder-contents listing.  Superset of the base :class:`PathOrder` columns plus ``STATUS`` (``approval_state``). Kept separate from ``PathOrder`` so the extra columns do not leak onto ``/folders`` or ``/path-parts``, and only apply at depth 1.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { ContentsSortOrder } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
} satisfies ContentsSortOrder

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ContentsSortOrder
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


