
# AppendEventRequest

Body for ``POST /v1/path-parts/{path_part_id}/events``.  The route requires ``can_write`` on the subject path_part. Server stamps ``id``/``tenant_id``/``actor_user_id``/``ts``/ ``subject_path_part_id``; frontend supplies only ``kind`` and ``payload``. ``kind`` must NOT use a reserved server namespace — those are emitted by service code so the audit trail can\'t be forged by an authenticated client.

## Properties

Name | Type
------------ | -------------
`kind` | string
`payload` | { [key: string]: any; }

## Example

```typescript
import type { AppendEventRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "kind": null,
  "payload": null,
} satisfies AppendEventRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AppendEventRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


