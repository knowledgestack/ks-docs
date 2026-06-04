
# ApiKeyResponse

API key metadata (without the secret key).

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`keySuffix` | string
`createdAt` | Date

## Example

```typescript
import type { ApiKeyResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "keySuffix": null,
  "createdAt": null,
} satisfies ApiKeyResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApiKeyResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


