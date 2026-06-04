
# SubscriptionPlanResponse

Public-facing plan description.  Surfaced via ``GET /public/subscriptions`` (unauth) so the FE can render the upgrade page even before sign-in. Field names line up 1:1 with ``SubscriptionPlan`` ORM attributes; callers build the response via ``SubscriptionPlanResponse.model_validate(plan)`` (``BaseResponse`` enables ``from_attributes=True``).

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`ingestedPages` | number
`messages` | number
`searches` | number
`maxSeats` | number
`_public` | boolean
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { SubscriptionPlanResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "ingestedPages": null,
  "messages": null,
  "searches": null,
  "maxSeats": null,
  "_public": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies SubscriptionPlanResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubscriptionPlanResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


