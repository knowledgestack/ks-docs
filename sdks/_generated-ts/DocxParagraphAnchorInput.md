
# DocxParagraphAnchorInput

One citation anchored to a paragraph in a .docx deliverable.

## Properties

Name | Type
------------ | -------------
`type` | string
`paragraphIndex` | number
`commentId` | number
`citations` | [Array&lt;CitedChunk&gt;](CitedChunk.md)
`anchorText` | string

## Example

```typescript
import type { DocxParagraphAnchorInput } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "paragraphIndex": null,
  "commentId": null,
  "citations": null,
  "anchorText": null,
} satisfies DocxParagraphAnchorInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DocxParagraphAnchorInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


