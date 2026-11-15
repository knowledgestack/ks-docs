
# RunsInProgressStatus

Workflow runs in progress against the plan\'s cap on runs at once.

## Properties

Name | Type
------------ | -------------
`used` | number
`limit` | number

## Example

```typescript
import type { RunsInProgressStatus } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "used": null,
  "limit": null,
} satisfies RunsInProgressStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RunsInProgressStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


