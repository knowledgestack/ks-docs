
# SeatsError

The seats a purchase or plan change asked for, and what refused them.

## Properties

Name | Type
------------ | -------------
`asked` | number
`members` | number
`planLimit` | number

## Example

```typescript
import type { SeatsError } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "asked": null,
  "members": null,
  "planLimit": null,
} satisfies SeatsError

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeatsError
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


