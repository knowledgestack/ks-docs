
# EmailMetadata

Structured headers of an ingested email (EMAIL document type only).  Populated by ``document_preparation_activity`` from the same parse that renders the message body, so the stored metadata and the rendered document cannot disagree. Null on a multi-message archive: its messages are ingested as their own documents, and each carries its own block.

## Properties

Name | Type
------------ | -------------
`subject` | string
`sender` | [EmailParty](EmailParty.md)
`to` | [Array&lt;EmailParty&gt;](EmailParty.md)
`cc` | [Array&lt;EmailParty&gt;](EmailParty.md)
`bcc` | [Array&lt;EmailParty&gt;](EmailParty.md)
`sentAt` | string
`messageId` | string
`inReplyTo` | string
`references` | Array&lt;string&gt;
`conversationTopic` | string
`threadRootId` | string
`rawHeaders` | string

## Example

```typescript
import type { EmailMetadata } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "subject": null,
  "sender": null,
  "to": null,
  "cc": null,
  "bcc": null,
  "sentAt": null,
  "messageId": null,
  "inReplyTo": null,
  "references": null,
  "conversationTopic": null,
  "threadRootId": null,
  "rawHeaders": null,
} satisfies EmailMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmailMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


