
# ExtractRequest

Request body for POST /v1/agent/extract.

## Properties

Name | Type
------------ | -------------
`prompt` | string
`schemaPathPartId` | string
`outputSchema` | { [key: string]: any; }

## Example

```typescript
import type { ExtractRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "prompt": null,
  "schemaPathPartId": null,
  "outputSchema": null,
} satisfies ExtractRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExtractRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


