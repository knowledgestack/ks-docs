
# MemoryScope

Owner scope for a memory document.  Lowercase values match the request-schema Literals so no mapping layer is needed. ``user`` resolves to /users/{user_id}; ``workflow`` to the workflow definition\'s path_part. (Tenant scope is deferred.)

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { MemoryScope } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
} satisfies MemoryScope

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MemoryScope
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


