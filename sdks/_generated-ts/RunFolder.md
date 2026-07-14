
# RunFolder

A run subfolder plus its resolved assets (``inputs/`` or ``outputs/``).

## Properties

Name | Type
------------ | -------------
`id` | string
`pathPartId` | string
`materializedPath` | string
`assets` | [Array&lt;WorkflowRunAsset&gt;](WorkflowRunAsset.md)

## Example

```typescript
import type { RunFolder } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "pathPartId": null,
  "materializedPath": null,
  "assets": null,
} satisfies RunFolder

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RunFolder
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


