
# DataSourceDetailResponse

A connector plus the schemas (and their readable tables) the caller sees.  ``description_document_id`` points at the connector\'s generated, ingested \"Database overview\" Document (a hidden system file); null until generated.

## Properties

Name | Type
------------ | -------------
`dataSource` | [DataSourceResponse](DataSourceResponse.md)
`schemas` | [Array&lt;DataSourceSchemaResponse&gt;](DataSourceSchemaResponse.md)
`descriptionDocumentId` | string

## Example

```typescript
import type { DataSourceDetailResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "dataSource": null,
  "schemas": null,
  "descriptionDocumentId": null,
} satisfies DataSourceDetailResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DataSourceDetailResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


