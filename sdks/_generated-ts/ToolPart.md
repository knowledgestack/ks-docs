
# ToolPart


## Properties

Name | Type
------------ | -------------
`id` | string
`seq` | number
`startTime` | Date
`endTime` | Date
`kind` | string
`toolCallId` | string
`toolName` | string
`input` | [Input](Input.md)
`status` | [ToolStatus](ToolStatus.md)
`result` | any
`isError` | boolean
`durationMs` | number
`extras` | { [key: string]: any; }

## Example

```typescript
import type { ToolPart } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "seq": null,
  "startTime": null,
  "endTime": null,
  "kind": null,
  "toolCallId": null,
  "toolName": null,
  "input": null,
  "status": null,
  "result": null,
  "isError": null,
  "durationMs": null,
  "extras": null,
} satisfies ToolPart

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ToolPart
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


