
# LineageNodeResponse

A node in the lineage graph (enriched chunk).

## Properties

Name | Type
------------ | -------------
`id` | string
`content` | string
`chunkType` | [ChunkType](ChunkType.md)
`chunkMetadata` | [ChunkMetadata](ChunkMetadata.md)
`tenantId` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { LineageNodeResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "content": null,
  "chunkType": null,
  "chunkMetadata": null,
  "tenantId": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies LineageNodeResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LineageNodeResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


