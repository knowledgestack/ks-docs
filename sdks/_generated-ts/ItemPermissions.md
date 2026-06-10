
# ItemPermissions

Caller\'s authorization on an item: whether an action is permitted.  Authorization only — not whether it will currently succeed. An authorized write/delete can still be refused by transient state on the same response: a run\'s ``execution_state`` (e.g. not IN_PROGRESS to delete), a ``system_managed`` item, or a document that is ``approval_state``-sealed or checked out by another user (see authorization.md §5.6). Ladder: ``can_delete`` ⟹ ``can_write`` ⟹ ``can_read``; ``can_approve`` is orthogonal and always false for agents.

## Properties

Name | Type
------------ | -------------
`canRead` | boolean
`canWrite` | boolean
`canDelete` | boolean
`canApprove` | boolean

## Example

```typescript
import type { ItemPermissions } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "canRead": null,
  "canWrite": null,
  "canDelete": null,
  "canApprove": null,
} satisfies ItemPermissions

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ItemPermissions
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


