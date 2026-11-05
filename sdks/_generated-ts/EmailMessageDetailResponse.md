
# EmailMessageDetailResponse


## Properties

Name | Type
------------ | -------------
`partType` | string
`id` | string
`pathPartId` | string
`parentPathPartId` | string
`materializedPath` | string
`tenantId` | string
`name` | string
`externalMessageId` | string
`externalSourceFolder` | string
`preview` | string
`sentAt` | Date
`title` | string
`sender` | string
`recipients` | Array&lt;string&gt;
`ccRecipients` | Array&lt;string&gt;
`bccRecipients` | Array&lt;string&gt;
`hasAttachments` | boolean
`approvalState` | [PathPartApprovalState](PathPartApprovalState.md)
`owner` | [UserInfo](UserInfo.md)
`permissions` | [ItemPermissions](ItemPermissions.md)
`createdAt` | Date
`updatedAt` | Date
`content` | string
`attachments` | [Array&lt;EmailAttachmentResponse&gt;](EmailAttachmentResponse.md)

## Example

```typescript
import type { EmailMessageDetailResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "partType": null,
  "id": null,
  "pathPartId": null,
  "parentPathPartId": null,
  "materializedPath": null,
  "tenantId": null,
  "name": null,
  "externalMessageId": null,
  "externalSourceFolder": null,
  "preview": null,
  "sentAt": null,
  "title": null,
  "sender": null,
  "recipients": null,
  "ccRecipients": null,
  "bccRecipients": null,
  "hasAttachments": null,
  "approvalState": null,
  "owner": null,
  "permissions": null,
  "createdAt": null,
  "updatedAt": null,
  "content": null,
  "attachments": null,
} satisfies EmailMessageDetailResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmailMessageDetailResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


