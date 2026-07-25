
# ReorderPathPartRequest

Reorder a path part within its sibling list.

## Properties

Name | Type
------------ | -------------
`prevSiblingPathId` | string
`moveToHead` | boolean

## Example

```typescript
import type { ReorderPathPartRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "prevSiblingPathId": null,
  "moveToHead": null,
} satisfies ReorderPathPartRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReorderPathPartRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


