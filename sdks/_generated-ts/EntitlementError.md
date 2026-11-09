
# EntitlementError

The entitlement that refused a request, so a client can show or buy what it needs.  ``quota_exceeded`` (429) fills ``included``, ``additional`` and ``period_end``; ``feature_not_available`` (403) fills ``granted_by``.

## Properties

Name | Type
------------ | -------------
`key` | string
`kind` | [EntitlementKind](EntitlementKind.md)
`plan` | [PlanRef](PlanRef.md)
`grantedBy` | [Array&lt;PlanRef&gt;](PlanRef.md)
`included` | [EntitlementUsage](EntitlementUsage.md)
`additional` | [EntitlementUsage](EntitlementUsage.md)
`periodEnd` | Date

## Example

```typescript
import type { EntitlementError } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "key": null,
  "kind": null,
  "plan": null,
  "grantedBy": null,
  "included": null,
  "additional": null,
  "periodEnd": null,
} satisfies EntitlementError

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EntitlementError
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


