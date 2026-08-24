
# BillingSystem

External payment platform a subscription or payment is linked to.  ``STRIPE`` serves North America; ``PING_PP`` (Ping++, a mainland-China payment aggregator fronting Alipay + WeChat Pay) serves China. Rows with no external billing linkage (free / admin-issued / synthetic fall-back subscriptions) carry NULL instead of a value.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { BillingSystem } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
} satisfies BillingSystem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BillingSystem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


