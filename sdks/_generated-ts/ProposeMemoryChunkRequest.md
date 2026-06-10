
# ProposeMemoryChunkRequest


## Properties

Name | Type
------------ | -------------
`scope` | [MemoryScope](MemoryScope.md)
`scopeOwnerId` | string
`content` | string
`rationale` | string
`kind` | [MemoryKind](MemoryKind.md)
`runId` | string

## Example

```typescript
import type { ProposeMemoryChunkRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "scope": null,
  "scopeOwnerId": null,
  "content": null,
  "rationale": null,
  "kind": null,
  "runId": null,
} satisfies ProposeMemoryChunkRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProposeMemoryChunkRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


