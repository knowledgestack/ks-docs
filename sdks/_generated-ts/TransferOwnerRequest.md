
# TransferOwnerRequest

Transfer a path_part\'s ownership to another tenant member.

## Properties

Name | Type
------------ | -------------
`newOwnerUserId` | string

## Example

```typescript
import type { TransferOwnerRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "newOwnerUserId": null,
} satisfies TransferOwnerRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransferOwnerRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


