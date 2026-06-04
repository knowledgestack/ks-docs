
# InstructionSnapshot

Snapshot of one instruction document, pinned at trigger time.  ``path_part_id`` is the pinned ``DOCUMENT_VERSION`` identity that audit replay keys off. The agent reads the body straight from ``source_s3_uri`` and resolves the version\'s PDO id live — no PDO id is stored here.

## Properties

Name | Type
------------ | -------------
`pathPartId` | string
`materializedPath` | string
`partType` | string
`sourceS3Uri` | string

## Example

```typescript
import type { InstructionSnapshot } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "pathPartId": null,
  "materializedPath": null,
  "partType": null,
  "sourceS3Uri": null,
} satisfies InstructionSnapshot

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InstructionSnapshot
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


