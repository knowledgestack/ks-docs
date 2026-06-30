
# DataSourceDescriptionResponse

Result of (re)generating a connector\'s searchable description Document.

## Properties

Name | Type
------------ | -------------
`dataSourceId` | string
`descriptionDocumentId` | string

## Example

```typescript
import type { DataSourceDescriptionResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "dataSourceId": null,
  "descriptionDocumentId": null,
} satisfies DataSourceDescriptionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DataSourceDescriptionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


