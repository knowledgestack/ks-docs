
# UnfinishedMail

One mail a run saw and did not finish, and how often it has been tried.  Kept because the walk cannot find it again on its own. A folder is walked by delta, and a delta returns what *changed* — so a mail that failed is not listed again unless something about it changes at the source, which for a mail nobody touches never happens. The bookmark is still saved, and this is what makes that safe: without it the only way not to lose the mail would be to withhold the bookmark, which would re-walk the whole folder on every run for ever once a single mail went permanently bad.

## Properties

Name | Type
------------ | -------------
`reason` | string
`attempts` | number

## Example

```typescript
import type { UnfinishedMail } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "reason": null,
  "attempts": null,
} satisfies UnfinishedMail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UnfinishedMail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


