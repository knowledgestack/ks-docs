
# CheckpointDetails

Agent-internal overlay that replaces older messages in the loaded history.  Written as ``details.checkpoint`` on ``role=SYSTEM`` ThreadMessages. The boundary is explicit via ``upto_message_id`` + ``upto_message_created_at`` so the agent can keep recent messages uncompacted even though the checkpoint message itself is inserted at \"now\".

## Properties

Name | Type
------------ | -------------
`uptoMessageId` | string
`uptoMessageCreatedAt` | Date
`summary` | { [key: string]: any; }
`coveredMessageCount` | number
`tokensBefore` | number
`tokensAfter` | number
`summarizerModel` | string
`promptVersion` | string

## Example

```typescript
import type { CheckpointDetails } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "uptoMessageId": null,
  "uptoMessageCreatedAt": null,
  "summary": null,
  "coveredMessageCount": null,
  "tokensBefore": null,
  "tokensAfter": null,
  "summarizerModel": null,
  "promptVersion": null,
} satisfies CheckpointDetails

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CheckpointDetails
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


