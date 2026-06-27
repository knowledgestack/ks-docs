
# ColumnConfig

A modeled column. Only ``exposed`` columns are surfaced to the agent.

## Properties

Name | Type
------------ | -------------
`name` | string
`dataType` | string
`comment` | string
`isPk` | boolean
`exposed` | boolean
`references` | [ColumnReference](ColumnReference.md)

## Example

```typescript
import type { ColumnConfig } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "dataType": null,
  "comment": null,
  "isPk": null,
  "exposed": null,
  "references": null,
} satisfies ColumnConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ColumnConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


