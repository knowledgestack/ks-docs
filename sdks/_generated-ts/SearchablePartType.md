
# SearchablePartType

Part types that can be searched.  The same members as ``BROWSEABLE_PART_TYPES``, spelled out rather than derived: FastAPI needs a real enum to put the choices in the contract, and a dynamically built one would come out of the SDK generator unordered. The two lists are pinned equal by ``tests/agent/tools/test_browse.py::test_listable_kinds_match_api_enum`` — adding a part type here without adding it there (or the reverse) fails that test rather than silently dropping a type from search, which is how API_CONNECTION was lost once.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { SearchablePartType } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
} satisfies SearchablePartType

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchablePartType
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


