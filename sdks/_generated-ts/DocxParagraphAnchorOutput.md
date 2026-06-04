
# DocxParagraphAnchorOutput

One citation anchored to a paragraph in a .docx deliverable.

## Properties

Name | Type
------------ | -------------
`type` | string
`paragraphIndex` | number
`commentId` | number
`citations` | [Array&lt;CitedChunk&gt;](CitedChunk.md)
`anchorText` | string
`chunkIds` | Array&lt;string&gt;

## Example

```typescript
import type { DocxParagraphAnchorOutput } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "paragraphIndex": null,
  "commentId": null,
  "citations": null,
  "anchorText": null,
  "chunkIds": null,
} satisfies DocxParagraphAnchorOutput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DocxParagraphAnchorOutput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


