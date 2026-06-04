
# DissolveSectionResponse

Response from dissolving a section into a text chunk.

## Properties

Name | Type
------------ | -------------
`textChunkId` | string
`reparentedChildren` | number

## Example

```typescript
import type { DissolveSectionResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "textChunkId": null,
  "reparentedChildren": null,
} satisfies DissolveSectionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DissolveSectionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


