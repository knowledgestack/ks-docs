
# TestConnectionRequest

Test a connection without persisting it.  Exactly one mode must be supplied: fresh creds (``engine`` + ``connection_config`` + ``parent_path_part_id``) or a stored connector (``data_source_id``). The handler rejects zero or both modes with a 400.  Fresh mode requires ``parent_path_part_id`` and is gated by write access to that folder — the same permission as creating a connector there. This stops an authenticated user from turning the probe into an arbitrary-host reachability scanner (SSRF) against internal networks.

## Properties

Name | Type
------------ | -------------
`dataSourceId` | string
`engine` | [DataSourceEngine](DataSourceEngine.md)
`connectionConfig` | [ConnectionConfig](ConnectionConfig.md)
`parentPathPartId` | string

## Example

```typescript
import type { TestConnectionRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "dataSourceId": null,
  "engine": null,
  "connectionConfig": null,
  "parentPathPartId": null,
} satisfies TestConnectionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TestConnectionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


