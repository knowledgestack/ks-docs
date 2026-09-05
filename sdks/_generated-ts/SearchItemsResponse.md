
# SearchItemsResponse

A search page plus how many items of each type the query matched.  ``counts_by_type`` ignores any ``part_type`` filter so the filter chips can keep showing every type\'s count while one of them is selected.

## Properties

Name | Type
------------ | -------------
`items` | [Array&lt;FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponseOrDataSourceResponseOrDataSourceSchemaR&gt;](FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponseOrDataSourceResponseOrDataSourceSchemaR.md)
`total` | number
`limit` | number
`offset` | number
`countsByType` | { [key: string]: number; }

## Example

```typescript
import type { SearchItemsResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "items": null,
  "total": null,
  "limit": null,
  "offset": null,
  "countsByType": null,
} satisfies SearchItemsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchItemsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


