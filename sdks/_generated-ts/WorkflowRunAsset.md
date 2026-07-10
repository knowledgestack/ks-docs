
# WorkflowRunAsset

One input or output file/reference of a run, actionable in one call.  ``id`` is the PDO id (``path_part.metadata_obj_id``); ``path_part_id`` is the underlying path part (kept for approval-state / path-part lookups). Route on ``part_type`` to pick the API that takes ``id``: ``DOCUMENT`` → download_document / bulk-download (active version); ``DOCUMENT_VERSION`` → download_document_version (a version-pinned input, e.g. a cloned run\'s inputs); ``FOLDER`` / ``DATA_SOURCE`` / ``API_CONNECTION`` → list/query via that type\'s endpoint. Output assets are always ``DOCUMENT``.  ``origin`` tags an input asset\'s provenance (definition common file vs run reference vs upload) so the FE can group them; it is ``None`` on output assets.

## Properties

Name | Type
------------ | -------------
`id` | string
`pathPartId` | string
`name` | string
`partType` | [PartType](PartType.md)
`materializedPath` | string
`approvalState` | [PathPartApprovalState](PathPartApprovalState.md)
`origin` | [InputOrigin](InputOrigin.md)

## Example

```typescript
import type { WorkflowRunAsset } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "pathPartId": null,
  "name": null,
  "partType": null,
  "materializedPath": null,
  "approvalState": null,
  "origin": null,
} satisfies WorkflowRunAsset

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkflowRunAsset
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


