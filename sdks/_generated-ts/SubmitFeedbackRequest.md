
# SubmitFeedbackRequest

Request to create or update feedback on a knowledge entity.

## Properties

Name | Type
------------ | -------------
`targetType` | [FeedbackTargetType](FeedbackTargetType.md)
`targetId` | string
`rating` | [FeedbackRating](FeedbackRating.md)
`reason` | [FeedbackReason](FeedbackReason.md)
`comment` | string
`extraMetadata` | { [key: string]: any; }

## Example

```typescript
import type { SubmitFeedbackRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "targetType": null,
  "targetId": null,
  "rating": null,
  "reason": null,
  "comment": null,
  "extraMetadata": null,
} satisfies SubmitFeedbackRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubmitFeedbackRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


