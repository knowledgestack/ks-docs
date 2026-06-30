
# DocumentBlockChange

One changed block in a Word document, ordered by position.  ``from_paragraph_index``/``to_paragraph_index`` are the 0-based position of the ``<w:p>`` in ``word/document.xml`` body (the same index citation anchors use, so the frontend aligns changes to its docx render). ``anchor_text`` is a text-match fallback for that alignment. ``old``/``new`` are null on the absent side; ``*_spans`` mark changed word ranges (CJK-aware).

## Properties

Name | Type
------------ | -------------
`type` | [BlockChangeType](BlockChangeType.md)
`kind` | [BlockKind](BlockKind.md)
`changeClass` | [ChangeClass](ChangeClass.md)
`fromParagraphIndex` | number
`toParagraphIndex` | number
`oldText` | string
`newText` | string
`oldSpans` | [Array&lt;DiffSpan&gt;](DiffSpan.md)
`newSpans` | [Array&lt;DiffSpan&gt;](DiffSpan.md)
`formattingChanged` | boolean
`numericDelta` | string
`numericPct` | string
`anchorText` | string
`surface` | string
`cellChanges` | [Array&lt;TableCellChange&gt;](TableCellChange.md)
`revisions` | [Array&lt;RevisionEdit&gt;](RevisionEdit.md)
`oldImageRef` | string
`newImageRef` | string
`imageRegions` | [Array&lt;PixelRegion&gt;](PixelRegion.md)
`imageNote` | string

## Example

```typescript
import type { DocumentBlockChange } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "kind": null,
  "changeClass": null,
  "fromParagraphIndex": null,
  "toParagraphIndex": null,
  "oldText": null,
  "newText": null,
  "oldSpans": null,
  "newSpans": null,
  "formattingChanged": null,
  "numericDelta": null,
  "numericPct": null,
  "anchorText": null,
  "surface": null,
  "cellChanges": null,
  "revisions": null,
  "oldImageRef": null,
  "newImageRef": null,
  "imageRegions": null,
  "imageNote": null,
} satisfies DocumentBlockChange

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DocumentBlockChange
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


