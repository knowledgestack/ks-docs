
# EmailSyncConfig

How often a mailbox is read. Not which mailbox — nobody types that.  The address is whatever account consents, read back out of the id token and stored then. Asking for it up front looked like a safeguard and was mostly a trap: what the owner signs in with is their sign-in name (UPN), which for some organizations is not the mailbox\'s SMTP address at all — so a correctly typed email address would be refused at consent, and the admin would be told to recreate the connector with a string they had no way to know.  What is lost with it is a check on the *first* consent: a connector with no declared address accepts whoever signs in. Every consent after that is still checked against the stored address, which is the moment that actually goes wrong — somebody clicking through re-authorization in a hurry. And a first consent as the wrong account is visible rather than silent, because the connector carries a name of its own and the address beside it.  Which folders are mirrored is not here either: it is received and sent, which is what makes a conversation whole. See ``DEFAULT_EMAIL_FOLDERS``.

## Properties

Name | Type
------------ | -------------
`cron` | string

## Example

```typescript
import type { EmailSyncConfig } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "cron": null,
} satisfies EmailSyncConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmailSyncConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


