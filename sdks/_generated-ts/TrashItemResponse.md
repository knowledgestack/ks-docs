
# TrashItemResponse

A top-level item currently in trash.

## Properties

Name | Type
------------ | -------------
`pathPartId` | string
`metadataObjId` | string
`partType` | [PartType](PartType.md)
`name` | string
`parentPathPartId` | string
`materializedPath` | string
`deletedAt` | Date
`deletedBy` | string

## Example

```typescript
import type { TrashItemResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "pathPartId": null,
  "metadataObjId": null,
  "partType": null,
  "name": null,
  "parentPathPartId": null,
  "materializedPath": null,
  "deletedAt": null,
  "deletedBy": null,
} satisfies TrashItemResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrashItemResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


