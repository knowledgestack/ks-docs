
# EventResponse

One event row, anchored to a path_part subject.  ``kind`` is namespaced ``domain.action`` (e.g. ``workflow.approval``, ``document.created``). ``payload`` is the domain-specific structured JSON associated with the event, stored verbatim and never rewritten — the human-readable resolution lives alongside it in ``references``.

## Properties

Name | Type
------------ | -------------
`id` | string
`subjectPathPartId` | string
`kind` | string
`ts` | Date
`actorUserId` | string
`actorOnBehalfOf` | string
`payload` | { [key: string]: any; }
`actor` | [UserInfo](UserInfo.md)
`subjectName` | string
`subjectPath` | string
`subjectObjectId` | string
`subjectPartType` | string
`references` | [{ [key: string]: ResolvedRef; }](ResolvedRef.md)

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
  "actorOnBehalfOf": null,
  "payload": null,
  "actor": null,
  "subjectName": null,
  "subjectPath": null,
  "subjectObjectId": null,
  "subjectPartType": null,
  "references": null,
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


