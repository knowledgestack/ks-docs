
# EmailThreadResponse


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
`sourceConversationId` | string
`title` | string
`messageCount` | number
`participants` | Array&lt;string&gt;
`hasAttachments` | boolean
`attachmentNames` | Array&lt;string&gt;
`attachmentCount` | number
`lastMessageAt` | Date
`lastMessage` | [EmailThreadLastMessage](EmailThreadLastMessage.md)
`approvalState` | [PathPartApprovalState](PathPartApprovalState.md)
`owner` | [UserInfo](UserInfo.md)
`permissions` | [ItemPermissions](ItemPermissions.md)
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { EmailThreadResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "partType": null,
  "id": null,
  "pathPartId": null,
  "parentPathPartId": null,
  "materializedPath": null,
  "tenantId": null,
  "name": null,
  "sourceConversationId": null,
  "title": null,
  "messageCount": null,
  "participants": null,
  "hasAttachments": null,
  "attachmentNames": null,
  "attachmentCount": null,
  "lastMessageAt": null,
  "lastMessage": null,
  "approvalState": null,
  "owner": null,
  "permissions": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies EmailThreadResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmailThreadResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


