
# StructuredChange

One changed key-path in a JSON/YAML document.  ``path`` is a dotted/indexed locator like ``services.web.image`` or ``items[3].qty``. ``old`` is null for added, ``new`` is null for removed.

## Properties

Name | Type
------------ | -------------
`path` | string
`old` | string
`_new` | string
`type` | [StructuredChangeType](StructuredChangeType.md)

## Example

```typescript
import type { StructuredChange } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "path": null,
  "old": null,
  "_new": null,
  "type": null,
} satisfies StructuredChange

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StructuredChange
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


