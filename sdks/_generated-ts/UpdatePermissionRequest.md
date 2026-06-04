
# UpdatePermissionRequest


## Properties

Name | Type
------------ | -------------
`pathPartId` | string
`capability` | [PermissionCapability](PermissionCapability.md)

## Example

```typescript
import type { UpdatePermissionRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "pathPartId": null,
  "capability": null,
} satisfies UpdatePermissionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdatePermissionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


