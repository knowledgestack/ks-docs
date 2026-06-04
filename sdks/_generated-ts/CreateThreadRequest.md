
# CreateThreadRequest


## Properties

Name | Type
------------ | -------------
`parentPathPartId` | string
`title` | string
`messageForTitle` | string
`pathPartName` | string
`systemManaged` | boolean

## Example

```typescript
import type { CreateThreadRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "parentPathPartId": null,
  "title": null,
  "messageForTitle": null,
  "pathPartName": null,
  "systemManaged": null,
} satisfies CreateThreadRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateThreadRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


