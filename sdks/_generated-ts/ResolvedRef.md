
# ResolvedRef

One id resolved to a human-readable, linkable entity.  Every UUID that appears in an event (its subject, its actor, and any id inside the payload) resolves to one of these so the frontend can render a name and a link instead of a bare UUID. ``object_id`` is what the frontend routes on: a PDO id for a path_part (never the internal path_part_id), or the user id for a user.

## Properties

Name | Type
------------ | -------------
`entityType` | string
`objectId` | string
`displayName` | string
`partType` | string

## Example

```typescript
import type { ResolvedRef } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "entityType": null,
  "objectId": null,
  "displayName": null,
  "partType": null,
} satisfies ResolvedRef

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ResolvedRef
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


