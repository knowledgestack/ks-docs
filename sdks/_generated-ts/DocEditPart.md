
# DocEditPart


## Properties

Name | Type
------------ | -------------
`id` | string
`seq` | number
`startTime` | Date
`endTime` | Date
`kind` | string
`toolCallId` | string
`documentId` | string
`baseVersionId` | string
`newVersionId` | string
`docFormat` | string
`approvalId` | string

## Example

```typescript
import type { DocEditPart } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "seq": null,
  "startTime": null,
  "endTime": null,
  "kind": null,
  "toolCallId": null,
  "documentId": null,
  "baseVersionId": null,
  "newVersionId": null,
  "docFormat": null,
  "approvalId": null,
} satisfies DocEditPart

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DocEditPart
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


