
# XlsxCellAnchorInputOrDocxParagraphAnchorInput


## Properties

Name | Type
------------ | -------------
`type` | string
`sheetName` | string
`cellAddress` | string
`citations` | [Array&lt;CitedChunk&gt;](CitedChunk.md)
`anchorText` | string
`paragraphIndex` | number
`commentId` | number

## Example

```typescript
import type { XlsxCellAnchorInputOrDocxParagraphAnchorInput } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "sheetName": null,
  "cellAddress": null,
  "citations": null,
  "anchorText": null,
  "paragraphIndex": null,
  "commentId": null,
} satisfies XlsxCellAnchorInputOrDocxParagraphAnchorInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as XlsxCellAnchorInputOrDocxParagraphAnchorInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


