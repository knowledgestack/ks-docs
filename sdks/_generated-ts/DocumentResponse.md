
# DocumentResponse

Document response model.

## Properties

Name | Type
------------ | -------------
`partType` | string
`id` | string
`pathPartId` | string
`name` | string
`parentPathPartId` | string
`documentType` | [DocumentType](DocumentType.md)
`documentOrigin` | [DocumentOrigin](DocumentOrigin.md)
`activeVersionId` | string
`activeVersion` | [DocumentVersionResponse](DocumentVersionResponse.md)
`materializedPath` | string
`systemManaged` | boolean
`approvalState` | [PathPartApprovalState](PathPartApprovalState.md)
`excludeFromQdrant` | boolean
`tenantId` | string
`owner` | [UserInfo](UserInfo.md)
`createdAt` | Date
`updatedAt` | Date
`tags` | [Array&lt;TagResponse&gt;](TagResponse.md)
`canWrite` | boolean
`checkout` | [DocumentCheckoutResponse](DocumentCheckoutResponse.md)

## Example

```typescript
import type { DocumentResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "partType": null,
  "id": null,
  "pathPartId": null,
  "name": null,
  "parentPathPartId": null,
  "documentType": null,
  "documentOrigin": null,
  "activeVersionId": null,
  "activeVersion": null,
  "materializedPath": null,
  "systemManaged": null,
  "approvalState": null,
  "excludeFromQdrant": null,
  "tenantId": null,
  "owner": null,
  "createdAt": null,
  "updatedAt": null,
  "tags": null,
  "canWrite": null,
  "checkout": null,
} satisfies DocumentResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DocumentResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


