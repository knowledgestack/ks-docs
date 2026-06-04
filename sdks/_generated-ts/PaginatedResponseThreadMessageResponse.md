
# PaginatedResponseThreadMessageResponse


## Properties

Name | Type
------------ | -------------
`items` | [Array&lt;ThreadMessageResponse&gt;](ThreadMessageResponse.md)
`total` | number
`limit` | number
`offset` | number

## Example

```typescript
import type { PaginatedResponseThreadMessageResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "items": null,
  "total": null,
  "limit": null,
  "offset": null,
} satisfies PaginatedResponseThreadMessageResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PaginatedResponseThreadMessageResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


