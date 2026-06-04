
# UpdateFolderRequest

Request to update a folder (rename, move, and/or change qdrant exclusion).

## Properties

Name | Type
------------ | -------------
`name` | string
`parentPathPartId` | string
`excludeFromQdrant` | boolean

## Example

```typescript
import type { UpdateFolderRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "parentPathPartId": null,
  "excludeFromQdrant": null,
} satisfies UpdateFolderRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateFolderRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


