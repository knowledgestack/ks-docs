
# SectionContentItemOrChunkContentItem


## Properties

Name | Type
------------ | -------------
`partType` | string
`pathPartId` | string
`name` | string
`parentPathId` | string
`metadataObjId` | string
`depth` | number
`pageNumber` | number
`materializedPath` | string
`systemManaged` | boolean
`approvalState` | [PathPartApprovalState](PathPartApprovalState.md)
`createdAt` | Date
`updatedAt` | Date
`content` | string
`chunkType` | [ChunkType](ChunkType.md)
`chunkMetadata` | [ChunkMetadata](ChunkMetadata.md)

## Example

```typescript
import type { SectionContentItemOrChunkContentItem } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "partType": null,
  "pathPartId": null,
  "name": null,
  "parentPathId": null,
  "metadataObjId": null,
  "depth": null,
  "pageNumber": null,
  "materializedPath": null,
  "systemManaged": null,
  "approvalState": null,
  "createdAt": null,
  "updatedAt": null,
  "content": null,
  "chunkType": null,
  "chunkMetadata": null,
} satisfies SectionContentItemOrChunkContentItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SectionContentItemOrChunkContentItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


