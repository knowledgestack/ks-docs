
# WorkflowRunSnapshot

Frozen workflow configuration captured at trigger time.  ``workflow_definition_id`` and ``user_id`` are NOT stored here — they live directly on the ``WorkflowRun`` row and are surfaced via ``WorkflowRunResponse`` top-level fields.  Inputs are per-run; outputs land in the run\'s ``outputs/`` folder. The agent resolves the run\'s inputs/outputs/discussions folders by listing the run-folder children at activity startup.

## Properties

Name | Type
------------ | -------------
`workflowName` | string
`maxRunDurationSeconds` | number
`instruction` | [InstructionSnapshot](InstructionSnapshot.md)
`inputs` | [Array&lt;InputSnapshot&gt;](InputSnapshot.md)
`userMessage` | string

## Example

```typescript
import type { WorkflowRunSnapshot } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "workflowName": null,
  "maxRunDurationSeconds": null,
  "instruction": null,
  "inputs": null,
  "userMessage": null,
} satisfies WorkflowRunSnapshot

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkflowRunSnapshot
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


