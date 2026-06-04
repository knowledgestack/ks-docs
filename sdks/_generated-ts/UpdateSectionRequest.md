
# UpdateSectionRequest

Request to update a section.

## Properties

Name | Type
------------ | -------------
`name` | string
`pageNumber` | number
`prevSiblingPathId` | string
`moveToHead` | boolean
`parentPathPartId` | string

## Example

```typescript
import type { UpdateSectionRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "pageNumber": null,
  "prevSiblingPathId": null,
  "moveToHead": null,
  "parentPathPartId": null,
} satisfies UpdateSectionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateSectionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


