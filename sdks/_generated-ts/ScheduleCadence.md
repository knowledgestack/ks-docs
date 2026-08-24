
# ScheduleCadence

How often a workflow definition runs itself.  The cadence names the recurrence; the time of day, weekday and day of month all come from the definition\'s ``schedule_start_at``, so an illegal combination (a daily cadence carrying a weekday, say) cannot be expressed. ``None`` on the definition means manual-only — the state every definition is in today.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { ScheduleCadence } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
} satisfies ScheduleCadence

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScheduleCadence
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


