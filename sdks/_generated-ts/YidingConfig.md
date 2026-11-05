
# YidingConfig

What a customer supplies for a YiDing sync.  The stored summary, plus the two things a caller supplies that are not part of it: the secret, and the recurrence — which is a ``data_source`` column now rather than a key in this config.

## Properties

Name | Type
------------ | -------------
`username` | string
`businessId` | string
`startDate` | Date
`baseUrl` | string
`password` | string
`cron` | string

## Example

```typescript
import type { YidingConfig } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "username": null,
  "businessId": null,
  "startDate": null,
  "baseUrl": null,
  "password": null,
  "cron": null,
} satisfies YidingConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as YidingConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


