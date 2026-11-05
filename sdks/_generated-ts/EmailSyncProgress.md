
# EmailSyncProgress

When a mailbox connector last reported in.  What a UI has to say while a first sync is still walking the mailbox. Derived from the connector row alone, so a folder listing that returns many connectors costs no extra query per row.  ``sync_status`` says whether the connector is healthy; this says whether it is still moving. The two are read together: ACTIVE with nothing reported in yet is a mailbox being walked for the first time, not a mailbox that is ready.

## Properties

Name | Type
------------ | -------------
`lastSyncFinishedAt` | Date

## Example

```typescript
import type { EmailSyncProgress } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "lastSyncFinishedAt": null,
} satisfies EmailSyncProgress

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmailSyncProgress
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


