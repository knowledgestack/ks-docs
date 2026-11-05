
# EmailConfigChange

What a mailbox connector\'s config may still change: how often it runs.  Not the mailbox: pointing an existing connector at another address would leave the first mailbox\'s mail under a connector that now claims to be the second one\'s, and the stored grant would not refresh for it anyway. A second mailbox is a second connector.

## Properties

Name | Type
------------ | -------------
`cron` | string

## Example

```typescript
import type { EmailConfigChange } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "cron": null,
} satisfies EmailConfigChange

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmailConfigChange
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


