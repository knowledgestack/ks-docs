
# MailCredentialOption

A registration as anyone in the workspace may see it.  The whole of it. Picking one is all an ordinary member does with it, and a name is all picking needs — the ids are the admin\'s business and the secret is nobody\'s. This is also what a connector echoes, because a connector is readable by anyone with read access to its folder.

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`provider` | string

## Example

```typescript
import type { MailCredentialOption } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "provider": null,
} satisfies MailCredentialOption

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MailCredentialOption
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


