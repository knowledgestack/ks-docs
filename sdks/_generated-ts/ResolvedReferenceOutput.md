
# ResolvedReferenceOutput

A parsed reference enriched with display name and path from the database.  Uses ``extra=\"ignore\"`` (not ``\"forbid\"``) because SDK dicts may contain fields not yet modelled here.  Adding ``\"forbid\"`` would cause runtime deserialization failures whenever the SDK adds a new field.

## Properties

Name | Type
------------ | -------------
`refType` | string
`entityId` | string
`displayName` | string
`materializedPath` | string

## Example

```typescript
import type { ResolvedReferenceOutput } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "refType": null,
  "entityId": null,
  "displayName": null,
  "materializedPath": null,
} satisfies ResolvedReferenceOutput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ResolvedReferenceOutput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


