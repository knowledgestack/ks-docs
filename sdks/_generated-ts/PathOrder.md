
# PathOrder

Ordering strategy for path traversal results.  - LOGICAL: Use prev/next_sibling_path_part_id linked list order per depth level - NAME: Alphabetical by path_part.name (DEFAULT) - UPDATED_AT: By updated_at timestamp (most recent first) - CREATED_AT: By created_at timestamp (oldest first)

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { PathOrder } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
} satisfies PathOrder

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PathOrder
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


