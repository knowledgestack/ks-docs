
# ThreadResponse


## Properties

Name | Type
------------ | -------------
`id` | string
`pathPartId` | string
`title` | string
`parentThreadId` | string
`materializedPath` | string
`tenantId` | string
`owner` | [UserInfo](UserInfo.md)
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { ThreadResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "pathPartId": null,
  "title": null,
  "parentThreadId": null,
  "materializedPath": null,
  "tenantId": null,
  "owner": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies ThreadResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ThreadResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


