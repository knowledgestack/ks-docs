
# ThreadMessageResponse


## Properties

Name | Type
------------ | -------------
`id` | string
`pathPartId` | string
`sequence` | number
`role` | [MessageRole](MessageRole.md)
`content` | [EnrichedThreadMessageContent](EnrichedThreadMessageContent.md)
`details` | [ThreadMessageDetailsOutput](ThreadMessageDetailsOutput.md)
`parentPathId` | string
`materializedPath` | string
`tenantId` | string
`authorTenantUserId` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { ThreadMessageResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "pathPartId": null,
  "sequence": null,
  "role": null,
  "content": null,
  "details": null,
  "parentPathId": null,
  "materializedPath": null,
  "tenantId": null,
  "authorTenantUserId": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies ThreadMessageResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ThreadMessageResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


