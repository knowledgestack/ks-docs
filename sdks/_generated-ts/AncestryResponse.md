
# AncestryResponse

Response containing the ancestry chain from root to target (inclusive).

## Properties

Name | Type
------------ | -------------
`ancestors` | [Array&lt;PathPartAncestorItem&gt;](PathPartAncestorItem.md)

## Example

```typescript
import type { AncestryResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "ancestors": null,
} satisfies AncestryResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AncestryResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


