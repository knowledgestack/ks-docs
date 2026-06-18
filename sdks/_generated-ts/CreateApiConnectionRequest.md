
# CreateApiConnectionRequest

Create an API connection under a folder the caller can write to.

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
import type { CreateApiConnectionRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "parentPathPartId": null,
  "baseUrl": null,
  "networkClass": null,
  "verifyTls": null,
  "authConfig": null,
  "apiDocs": null,
} satisfies CreateApiConnectionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateApiConnectionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


