
# EmailStoredIdsRequest

Which of these source message ids are already stored under a connector.  The sync diff, one page at a time. The whole set is deliberately not shipped to the worker: it grows with the mailbox, and a decade-old one would outgrow a Temporal payload — silently working until it did not.  Names the folder that is asking, which makes this a small write as well as a question: a mail reported as already stored is recorded as living in that folder. Nothing else records a move between two walked folders, because the answer is deliberately connector-wide — and ``external_source_folder`` is what the Inbox / Sent view filters on and what a removal is checked against.  Carries no tenant or connector id, for the same reason as ``EmailDeltaLinkRequest``: both come from the request\'s own identity.

## Properties

Name | Type
------------ | -------------
`folder` | string
`externalMessageIds` | Array&lt;string&gt;

## Example

```typescript
import type { EmailStoredIdsRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "folder": null,
  "externalMessageIds": null,
} satisfies EmailStoredIdsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmailStoredIdsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


