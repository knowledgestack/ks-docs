
# SheetVisibilityChange

A worksheet that became hidden or visible.  Hidden data is an audit red flag (a sheet quietly hidden between versions), so a ``visible``↔``hidden``/``veryHidden`` transition is surfaced. ``old_state``/ ``new_state`` is null when the sheet was added or removed.

## Properties

Name | Type
------------ | -------------
`sheet` | string
`oldState` | string
`newState` | string

## Example

```typescript
import type { SheetVisibilityChange } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "sheet": null,
  "oldState": null,
  "newState": null,
} satisfies SheetVisibilityChange

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SheetVisibilityChange
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


