
# EmailThreadLastMessage

The newest mail in a conversation, for the row that shows it collapsed.  A reference on the conversation plus one join, rather than a column per field: whichever field a row turns out to need is already here, and the listing still costs one query.

## Properties

Name | Type
------------ | -------------
`emailMessageId` | string
`sender` | string
`sentAt` | Date
`title` | string
`externalSourceFolder` | string
`preview` | string
`recipients` | Array&lt;string&gt;
`recipientCount` | number

## Example

```typescript
import type { EmailThreadLastMessage } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "emailMessageId": null,
  "sender": null,
  "sentAt": null,
  "title": null,
  "externalSourceFolder": null,
  "preview": null,
  "recipients": null,
  "recipientCount": null,
} satisfies EmailThreadLastMessage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmailThreadLastMessage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


