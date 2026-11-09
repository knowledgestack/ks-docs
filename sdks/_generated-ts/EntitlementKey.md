
# EntitlementKey

Natural key of ``knowledgestack.entitlement_definition``.  ``toggle.*`` is switched on by a plan; ``meter.*`` is counted against a limit. A plan without a row for a key does not grant it.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { EntitlementKey } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
} satisfies EntitlementKey

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EntitlementKey
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


