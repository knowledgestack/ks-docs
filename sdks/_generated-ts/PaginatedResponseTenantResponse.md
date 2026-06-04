
# PaginatedResponseTenantResponse


## Properties

Name | Type
------------ | -------------
`items` | [Array&lt;TenantResponse&gt;](TenantResponse.md)
`total` | number
`limit` | number
`offset` | number

## Example

```typescript
import type { PaginatedResponseTenantResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "items": null,
  "total": null,
  "limit": null,
  "offset": null,
} satisfies PaginatedResponseTenantResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PaginatedResponseTenantResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


