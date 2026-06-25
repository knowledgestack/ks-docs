
# TenantUserEditRequest

Request to update a tenant user\'s role and optional profile fields.  ``job_title`` and ``department`` follow partial-update semantics: omit (or send null) to leave the field unchanged, send an empty string to clear it to NULL.

## Properties

Name | Type
------------ | -------------
`role` | [TenantUserRole](TenantUserRole.md)
`jobTitle` | string
`department` | string

## Example

```typescript
import type { TenantUserEditRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "role": null,
  "jobTitle": null,
  "department": null,
} satisfies TenantUserEditRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TenantUserEditRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


