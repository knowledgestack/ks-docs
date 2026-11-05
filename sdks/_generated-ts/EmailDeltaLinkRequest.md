
# EmailDeltaLinkRequest

Where one folder\'s walk got to, recorded the moment it got there.  Written per folder rather than once per run on purpose: a run that dies after the second of four folders keeps what the first two earned, and the two that did not finish are re-walked instead of all four.  Safe to record as soon as Graph hands it over, because Graph only hands it over when a folder\'s pages have run out — every mail behind it has already been through this activity by then.  Carries no tenant or connector id: it is posted to the connector\'s own ``/v1`` route, so the connector comes from the path and the tenant from the caller\'s token rather than from the body. A body that named them could name a different tenant\'s.

## Properties

Name | Type
------------ | -------------
`folder` | string
`deltaLink` | string

## Example

```typescript
import type { EmailDeltaLinkRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "folder": null,
  "deltaLink": null,
} satisfies EmailDeltaLinkRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmailDeltaLinkRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


