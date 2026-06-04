
# TenantResponse

Tenant response model.

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`idpConfig` | { [key: string]: any; }
`settings` | [TenantSettingsResponse](TenantSettingsResponse.md)
`branding` | [TenantBrandingResponse](TenantBrandingResponse.md)
`seats` | number
`subscriptionId` | string

## Example

```typescript
import type { TenantResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "idpConfig": null,
  "settings": null,
  "branding": null,
  "seats": null,
  "subscriptionId": null,
} satisfies TenantResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TenantResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


