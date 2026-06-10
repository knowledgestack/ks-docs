
# CreateDataSourceRequest

Create a connector under a folder the caller can write to.

## Properties

Name | Type
------------ | -------------
`name` | string
`parentPathPartId` | string
`engine` | [DataSourceEngine](DataSourceEngine.md)
`connectionConfig` | [ConnectionConfig](ConnectionConfig.md)

## Example

```typescript
import type { CreateDataSourceRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "parentPathPartId": null,
  "engine": null,
  "connectionConfig": null,
} satisfies CreateDataSourceRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateDataSourceRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


