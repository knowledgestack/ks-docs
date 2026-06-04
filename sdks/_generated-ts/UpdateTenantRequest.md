
# UpdateTenantRequest

Update tenant request model.

## Properties

Name | Type
------------ | -------------
`name` | string
`idpConfig` | [IdpConfig](IdpConfig.md)
`settings` | [TenantSettingsUpdate](TenantSettingsUpdate.md)

## Example

```typescript
import type { UpdateTenantRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "idpConfig": null,
  "settings": null,
} satisfies UpdateTenantRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateTenantRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


