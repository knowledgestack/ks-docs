
# PathPartAncestorItem

Single ancestor item in an ancestry chain.

## Properties

Name | Type
------------ | -------------
`pathPartId` | string
`name` | string
`partType` | [PartType](PartType.md)
`parentPathId` | string
`metadataObjId` | string
`materializedPath` | string
`systemManaged` | boolean
`excludeFromQdrant` | boolean
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { PathPartAncestorItem } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "pathPartId": null,
  "name": null,
  "partType": null,
  "parentPathId": null,
  "metadataObjId": null,
  "materializedPath": null,
  "systemManaged": null,
  "excludeFromQdrant": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies PathPartAncestorItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PathPartAncestorItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


