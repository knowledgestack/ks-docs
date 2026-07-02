
# TextPartOrReasoningPartOrToolPartOrDocEditPart


## Properties

Name | Type
------------ | -------------
`id` | string
`seq` | number
`startTime` | Date
`endTime` | Date
`kind` | string
`text` | string
`citations` | [Array&lt;Citation&gt;](Citation.md)
`toolCallId` | string
`toolName` | string
`input` | [Input](Input.md)
`status` | [ToolStatus](ToolStatus.md)
`result` | any
`isError` | boolean
`durationMs` | number
`extras` | { [key: string]: any; }
`documentId` | string
`baseVersionId` | string
`newVersionId` | string
`docFormat` | string
`approvalId` | string

## Example

```typescript
import type { TextPartOrReasoningPartOrToolPartOrDocEditPart } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "seq": null,
  "startTime": null,
  "endTime": null,
  "kind": null,
  "text": null,
  "citations": null,
  "toolCallId": null,
  "toolName": null,
  "input": null,
  "status": null,
  "result": null,
  "isError": null,
  "durationMs": null,
  "extras": null,
  "documentId": null,
  "baseVersionId": null,
  "newVersionId": null,
  "docFormat": null,
  "approvalId": null,
} satisfies TextPartOrReasoningPartOrToolPartOrDocEditPart

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TextPartOrReasoningPartOrToolPartOrDocEditPart
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


