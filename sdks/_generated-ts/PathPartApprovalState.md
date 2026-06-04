
# PathPartApprovalState

Approval state on any path_part.  The PG enum ``path_part_approval_state`` carries a legacy ``\'rejected\'`` value that is intentionally NOT mapped here. It survives in the database as a noop — never written, never read. Loading a row whose column holds ``\'rejected\'`` will fail to decode; prod is empty of such rows.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { PathPartApprovalState } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
} satisfies PathPartApprovalState

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PathPartApprovalState
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


