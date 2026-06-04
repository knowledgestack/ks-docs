
# HealthCheckResponse


## Properties

Name | Type
------------ | -------------
`status` | string
`databaseTs` | Date

## Example

```typescript
import type { HealthCheckResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "databaseTs": null,
} satisfies HealthCheckResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HealthCheckResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


