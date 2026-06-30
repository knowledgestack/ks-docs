
# UpdateDataSourceRequest

Rename and/or move a connector (PATCH). Both fields optional.  A body with both ``None`` is rejected as a no-op 400. ``name`` renames the connector path_part; ``parent_path_part_id`` moves it under a new FOLDER (the move cascades ``materialized_path`` to the modeled-table children). Connection credentials and engine are not editable here.

## Properties

Name | Type
------------ | -------------
`name` | string
`parentPathPartId` | string

## Example

```typescript
import type { UpdateDataSourceRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "parentPathPartId": null,
} satisfies UpdateDataSourceRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateDataSourceRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


