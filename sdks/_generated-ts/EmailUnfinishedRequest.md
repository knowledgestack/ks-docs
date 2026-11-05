
# EmailUnfinishedRequest

What one folder\'s pass could not finish, replacing that folder\'s ledger.  Per folder and whole rather than merged per id, because the pass that writes it just finished walking that folder and therefore knows the entire answer for it: anything it managed this time is gone from the map it sends. The other folders\' entries are left alone, which is safe because a run walks its folders one at a time.  Carries no tenant or connector id, for the same reason as ``EmailDeltaLinkRequest``: both come from the request\'s own identity.

## Properties

Name | Type
------------ | -------------
`folder` | string
`unfinished` | [{ [key: string]: UnfinishedMail; }](UnfinishedMail.md)

## Example

```typescript
import type { EmailUnfinishedRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "folder": null,
  "unfinished": null,
} satisfies EmailUnfinishedRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmailUnfinishedRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


