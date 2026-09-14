
# ConnectionSummary

Where a connector points, with the password left out.

## Properties

Name | Type
------------ | -------------
`host` | string
`port` | number
`database` | string
`username` | string

## Example

```typescript
import type { ConnectionSummary } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "host": null,
  "port": null,
  "database": null,
  "username": null,
} satisfies ConnectionSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConnectionSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


