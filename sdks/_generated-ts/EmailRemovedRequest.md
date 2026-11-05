
# EmailRemovedRequest

Source ids that are no longer in a folder this connector walks.  The tree mirrors the mailbox\'s send and receive folders, so a mail that left them leaves the tree. The provider reports leaving a folder and nothing finer: measured on 2026-10-25, a mail deleted and a mail moved to Archive both came back as ``@removed`` with ``reason: \"deleted\"``.  Which is why the folder is named and checked. A delta is per folder, so moving a mail from Sent to Inbox reports it removed from Sent — and both are walked here. Trashing on the id alone took mail the mailbox still held, with both folders\' bookmarks advanced so no later run listed it again; whether it survived depended on the order the folders were walked.  Carries no tenant or connector id, for the same reason as ``EmailDeltaLinkRequest``: both come from the request\'s own identity.

## Properties

Name | Type
------------ | -------------
`folder` | string
`externalMessageIds` | Array&lt;string&gt;

## Example

```typescript
import type { EmailRemovedRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "folder": null,
  "externalMessageIds": null,
} satisfies EmailRemovedRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmailRemovedRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


