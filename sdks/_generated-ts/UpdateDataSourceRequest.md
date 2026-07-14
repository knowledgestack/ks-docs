
# UpdateDataSourceRequest

Rename, move, and/or re-credential a connector (PATCH). All optional.  A body with every field ``None`` is rejected as a no-op 400. ``name`` renames the connector path_part; ``parent_path_part_id`` moves it under a new FOLDER (the move cascades ``materialized_path`` to the modeled-table children). ``connection_config`` supplies a full, fresh credential set (never a partial patch — the stored password is never read back or echoed); it is re-validated before persisting. ``engine`` stays immutable: changing it would invalidate every modeled table\'s dialect assumptions.

## Properties

Name | Type
------------ | -------------
`name` | string
`parentPathPartId` | string
`connectionConfig` | [ConnectionConfig](ConnectionConfig.md)

## Example

```typescript
import type { UpdateDataSourceRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "parentPathPartId": null,
  "connectionConfig": null,
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


