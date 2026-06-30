
# DocumentDiff

A structured block diff of two Word (.docx) versions.  ``added``/``removed``/``modified`` are full totals; ``blocks`` is capped and ``omitted_blocks`` reports exactly how many were dropped (never a silent cap). ``surfaces_checked`` attests which OOXML surfaces were diffed, ``unaccepted_revisions`` counts tracked changes present (the rendered text may not be final), and ``decode_degraded`` flags a partial parse.

## Properties

Name | Type
------------ | -------------
`blocks` | [Array&lt;DocumentBlockChange&gt;](DocumentBlockChange.md)
`added` | number
`removed` | number
`modified` | number
`truncated` | boolean
`omittedBlocks` | number
`surfacesChecked` | Array&lt;string&gt;
`unacceptedRevisions` | number
`decodeDegraded` | boolean

## Example

```typescript
import type { DocumentDiff } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "blocks": null,
  "added": null,
  "removed": null,
  "modified": null,
  "truncated": null,
  "omittedBlocks": null,
  "surfacesChecked": null,
  "unacceptedRevisions": null,
  "decodeDegraded": null,
} satisfies DocumentDiff

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DocumentDiff
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


