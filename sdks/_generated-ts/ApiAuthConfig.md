
# ApiAuthConfig

Auth header to inject on every request. ``header_value`` is write-only.  Inherits ``extra=\"forbid\"`` so a typo\'d field (e.g. ``header_values``) is rejected rather than silently dropped — this object carries the secret.

## Properties

Name | Type
------------ | -------------
`headerName` | string
`headerValue` | string

## Example

```typescript
import type { ApiAuthConfig } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "headerName": null,
  "headerValue": null,
} satisfies ApiAuthConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApiAuthConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


