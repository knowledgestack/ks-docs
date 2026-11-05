
# CreateDataSourceRequest

Create a connector under a folder the caller can write to.  ``name`` is the one thing a mailbox does not take: it is named after the address it syncs, because a second name for it would only ever disagree with the mailbox. Where it goes is still the caller\'s, as it is for every other connector — the folder a connector hangs in is what decides who can read what hangs under it, so a personal mailbox and an organization\'s belong in different places.

## Properties

Name | Type
------------ | -------------
`name` | string
`parentPathPartId` | string
`sourceType` | [SourceType](SourceType.md)
`engine` | [DataSourceEngine](DataSourceEngine.md)
`connectionConfig` | [ConnectionConfig](ConnectionConfig.md)
`sourceConfig` | [YidingConfig](YidingConfig.md)
`mailCredentialId` | string
`emailConfig` | [EmailSyncConfig](EmailSyncConfig.md)

## Example

```typescript
import type { CreateDataSourceRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "parentPathPartId": null,
  "sourceType": null,
  "engine": null,
  "connectionConfig": null,
  "sourceConfig": null,
  "mailCredentialId": null,
  "emailConfig": null,
} satisfies CreateDataSourceRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateDataSourceRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


