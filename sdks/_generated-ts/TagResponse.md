
# TagResponse

Tag response model.

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`color` | string
`description` | string
`tenantId` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { TagResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "color": null,
  "description": null,
  "tenantId": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies TagResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TagResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


