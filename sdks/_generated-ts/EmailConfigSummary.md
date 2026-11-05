
# EmailConfigSummary

A mailbox connector\'s stored sync config, as the UI reads it.  Not the request schema read back: the stored config also holds the folder list the server picked, which the request deliberately does not take, and ``extra=\"forbid\"`` would refuse it.

## Properties

Name | Type
------------ | -------------
`folders` | { [key: string]: string; }

## Example

```typescript
import type { EmailConfigSummary } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "folders": null,
} satisfies EmailConfigSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmailConfigSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


