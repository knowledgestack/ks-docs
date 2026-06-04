
# PipelineState

Pipeline execution state tracking.

## Properties

Name | Type
------------ | -------------
`status` | [PipelineStatus](PipelineStatus.md)
`lastRunTimestamp` | Date
`lastStateUpdateTimestamp` | Date
`lastActivity` | string
`error` | string
`temporalWorkflowId` | string
`chunksProcessed` | number
`pageDpi` | number
`ingestionMode` | [IngestionMode](IngestionMode.md)
`chunkType` | [ChunkType](ChunkType.md)

## Example

```typescript
import type { PipelineState } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "lastRunTimestamp": null,
  "lastStateUpdateTimestamp": null,
  "lastActivity": null,
  "error": null,
  "temporalWorkflowId": null,
  "chunksProcessed": null,
  "pageDpi": null,
  "ingestionMode": null,
  "chunkType": null,
} satisfies PipelineState

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PipelineState
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


