
# ApiConnectionRequestResponse

Bounded result of an executed outbound request.

## Properties

Name | Type
------------ | -------------
`statusCode` | number
`headers` | { [key: string]: string; }
`body` | string
`truncated` | boolean
`latencyMs` | number

## Example

```typescript
import type { ApiConnectionRequestResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "statusCode": null,
  "headers": null,
  "body": null,
  "truncated": null,
  "latencyMs": null,
} satisfies ApiConnectionRequestResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApiConnectionRequestResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


