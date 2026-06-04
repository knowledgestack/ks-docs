
# AppendMemoryChunkRequest


## Properties

Name | Type
------------ | -------------
`body` | string
`kind` | [MemoryKind](MemoryKind.md)

## Example

```typescript
import type { AppendMemoryChunkRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "body": null,
  "kind": null,
} satisfies AppendMemoryChunkRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AppendMemoryChunkRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


