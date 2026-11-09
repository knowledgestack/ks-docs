
# TopupCheckoutRequest

Buy one top-up product (with Stripe, the Price\'s lookup key).

## Properties

Name | Type
------------ | -------------
`topupKey` | string

## Example

```typescript
import type { TopupCheckoutRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "topupKey": null,
} satisfies TopupCheckoutRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TopupCheckoutRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


