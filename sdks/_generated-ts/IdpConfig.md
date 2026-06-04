
# IdpConfig

Polymorphic IdP configuration for a tenant.  Stored as JSONB in tenant.idp_config. The ``provider`` field determines which typed config class to use when parsing ``configuration``.

## Properties

Name | Type
------------ | -------------
`provider` | [SupportedIdP](SupportedIdP.md)
`_configuration` | { [key: string]: any; }

## Example

```typescript
import type { IdpConfig } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "provider": null,
  "_configuration": null,
} satisfies IdpConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IdpConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


