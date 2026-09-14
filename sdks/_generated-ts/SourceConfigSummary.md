
# SourceConfigSummary

A YIDINGSYNC connector\'s stored config, with the password left out.

## Properties

Name | Type
------------ | -------------
`username` | string
`businessId` | string
`startDate` | Date
`cron` | string
`baseUrl` | string

## Example

```typescript
import type { SourceConfigSummary } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "username": null,
  "businessId": null,
  "startDate": null,
  "cron": null,
  "baseUrl": null,
} satisfies SourceConfigSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SourceConfigSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


