
# YidingCursor

How far a crawl has read; a missing mark means \"never\", not \"day zero\".

## Properties

Name | Type
------------ | -------------
`lastSyncedOrderTs` | Date
`lastSyncedUserTs` | Date

## Example

```typescript
import type { YidingCursor } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "lastSyncedOrderTs": null,
  "lastSyncedUserTs": null,
} satisfies YidingCursor

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as YidingCursor
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


