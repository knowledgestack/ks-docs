
# FeedbackEventResponse

Response schema for a single FeedbackEvent.

## Properties

Name | Type
------------ | -------------
`id` | string
`targetType` | [FeedbackTargetType](FeedbackTargetType.md)
`targetId` | string
`userId` | string
`rating` | [FeedbackRating](FeedbackRating.md)
`reason` | [FeedbackReason](FeedbackReason.md)
`comment` | string
`extraMetadata` | { [key: string]: any; }
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { FeedbackEventResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "targetType": null,
  "targetId": null,
  "userId": null,
  "rating": null,
  "reason": null,
  "comment": null,
  "extraMetadata": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies FeedbackEventResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FeedbackEventResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


