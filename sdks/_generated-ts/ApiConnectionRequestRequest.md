
# ApiConnectionRequestRequest

An outbound request the caller (or agent) wants executed.

## Properties

Name | Type
------------ | -------------
`method` | string
`path` | string
`query` | { [key: string]: string; }
`headers` | { [key: string]: string; }
`body` | any

## Example

```typescript
import type { ApiConnectionRequestRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "method": null,
  "path": null,
  "query": null,
  "headers": null,
  "body": null,
} satisfies ApiConnectionRequestRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApiConnectionRequestRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


