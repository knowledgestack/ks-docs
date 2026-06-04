
# SetApprovalStateRequest

Body for ``POST /v1/path-parts/{path_part_id}/approval``.  Single endpoint covers every transition in the state machine:  * ``{state: \"pending\"}`` — request approval (from ``not_required``) OR   unapprove (from ``approved``). Server dispatches on current state. * ``{state: \"approved\", reason?}`` — approve. For folders, fails 409   if any descendant is still ``pending``. ``reason`` is an optional   reviewer note persisted on the audit row.

## Properties

Name | Type
------------ | -------------
`state` | string
`reason` | string

## Example

```typescript
import type { SetApprovalStateRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "state": null,
  "reason": null,
} satisfies SetApprovalStateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SetApprovalStateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


