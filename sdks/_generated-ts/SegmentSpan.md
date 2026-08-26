
# SegmentSpan

One ASR segment\'s span inside a media chunk (media chunks only).  Field names are deliberately compact — a media document stores hundreds of chunks x tens of spans each in ``chunk_metadata`` JSONB. Measured worst case is a 4-hour Mandarin recording: 175 chunks x ~33 spans, ~190 KB total.

## Properties

Name | Type
------------ | -------------
`s` | number
`e` | number
`c` | number
`k` | number

## Example

```typescript
import type { SegmentSpan } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "s": null,
  "e": null,
  "c": null,
  "k": null,
} satisfies SegmentSpan

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SegmentSpan
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


