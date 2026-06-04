
# SectionResponse

Section response model.

## Properties

Name | Type
------------ | -------------
`id` | string
`pathPartId` | string
`name` | string
`pageNumber` | number
`parentPathId` | string
`prevSiblingPathId` | string
`nextSiblingPathId` | string
`materializedPath` | string
`systemManaged` | boolean
`systemMetadata` | [SectionSystemMetadata](SectionSystemMetadata.md)
`tenantId` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { SectionResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "pathPartId": null,
  "name": null,
  "pageNumber": null,
  "parentPathId": null,
  "prevSiblingPathId": null,
  "nextSiblingPathId": null,
  "materializedPath": null,
  "systemManaged": null,
  "systemMetadata": null,
  "tenantId": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies SectionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SectionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


