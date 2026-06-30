
# UpdateApiConnectionRequest

Partial update (PATCH). A risk-increasing change re-arms the disclaimer.  ``name`` renames the connection and ``parent_path_part_id`` moves it under a new FOLDER; neither is a risk-increasing change, so a rename/move alone leaves the disclaimer intact.

## Properties

Name | Type
------------ | -------------
`name` | string
`parentPathPartId` | string
`baseUrl` | string
`networkClass` | [NetworkClass](NetworkClass.md)
`verifyTls` | boolean
`authConfig` | [ApiAuthConfig](ApiAuthConfig.md)
`apiDocs` | string

## Example

```typescript
import type { UpdateApiConnectionRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "parentPathPartId": null,
  "baseUrl": null,
  "networkClass": null,
  "verifyTls": null,
  "authConfig": null,
  "apiDocs": null,
} satisfies UpdateApiConnectionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateApiConnectionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


