
# TenantBrandingResponse

Resolved branding with presigned URLs instead of internal S3 URIs.

## Properties

Name | Type
------------ | -------------
`brandName` | string
`brandColor` | string
`logoUrl` | string
`logoDarkUrl` | string
`faviconUrl` | string
`themeOverrides` | { [key: string]: string; }

## Example

```typescript
import type { TenantBrandingResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "brandName": null,
  "brandColor": null,
  "logoUrl": null,
  "logoDarkUrl": null,
  "faviconUrl": null,
  "themeOverrides": null,
} satisfies TenantBrandingResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TenantBrandingResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


