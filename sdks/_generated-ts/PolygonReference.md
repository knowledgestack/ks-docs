
# PolygonReference

Reference to a polygon on a specific page.

## Properties

Name | Type
------------ | -------------
`page` | number
`polygon` | [Polygon](Polygon.md)

## Example

```typescript
import type { PolygonReference } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "page": null,
  "polygon": null,
} satisfies PolygonReference

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PolygonReference
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


