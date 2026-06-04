
# EventResponse

One event row, anchored to a path_part subject.  ``kind`` is namespaced ``domain.action`` (e.g. ``workflow.approval``, ``document.created``). ``payload`` is the domain-specific structured JSON associated with the event.

## Properties

Name | Type
------------ | -------------
`id` | string
`subjectPathPartId` | string
`kind` | string
`ts` | Date
`actorUserId` | string
`payload` | { [key: string]: any; }

## Example

```typescript
import type { EventResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "subjectPathPartId": null,
  "kind": null,
  "ts": null,
  "actorUserId": null,
  "payload": null,
} satisfies EventResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


