
# CreateWorkflowDefinitionRequest

Create a new workflow definition.  Inputs are per-run (see ``POST /workflow-definitions/{id}/runs``) so only the instruction lives on the definition. ``instruction_path_part_id`` is a ``DOCUMENT`` path_part.

## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`maxRunDurationSeconds` | number
`parentPathPartId` | string
`instructionPathPartId` | string
`approvalRequired` | boolean
`isTemplate` | boolean

## Example

```typescript
import type { CreateWorkflowDefinitionRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "description": null,
  "maxRunDurationSeconds": null,
  "parentPathPartId": null,
  "instructionPathPartId": null,
  "approvalRequired": null,
  "isTemplate": null,
} satisfies CreateWorkflowDefinitionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateWorkflowDefinitionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


