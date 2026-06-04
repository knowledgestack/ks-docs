
# PathPartTagsResponse

Response containing the current tags for a path part.

## Properties

Name | Type
------------ | -------------
`tags` | [Array&lt;TagResponse&gt;](TagResponse.md)

## Example

```typescript
import type { PathPartTagsResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "tags": null,
} satisfies PathPartTagsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PathPartTagsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


