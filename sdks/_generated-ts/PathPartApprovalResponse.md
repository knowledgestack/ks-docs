
# PathPartApprovalResponse

Current approval decision over any path_part (file or folder).

## Properties

Name | Type
------------ | -------------
`id` | string
`pathPartId` | string
`status` | [PathPartApprovalDecision](PathPartApprovalDecision.md)
`reviewerId` | string
`reviewedAt` | Date
`reason` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { PathPartApprovalResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "pathPartId": null,
  "status": null,
  "reviewerId": null,
  "reviewedAt": null,
  "reason": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies PathPartApprovalResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PathPartApprovalResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


