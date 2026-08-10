
# BulkTrashRequest

Restore or permanently delete the selected trashed objects by PDO id.

## Properties

Name | Type
------------ | -------------
`objectIds` | Array&lt;string&gt;

## Example

```typescript
import type { BulkTrashRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "objectIds": null,
} satisfies BulkTrashRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkTrashRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


