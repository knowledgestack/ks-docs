
# ConnectorSyncStatus

Where a connector stands with respect to syncing.  NEEDS_REAUTH is separate from FAILED because retrying cannot fix it: the stored grant is gone and only the resource owner can authorize again.  NO_SYNC is what a connector nothing crawls carries — a DIRECT SQL source is read on demand and has no recurrence, so it has no state to report. It exists so the column can be NOT NULL: a nullable one would make \"nothing syncs this\" and \"nothing has run yet\" the same value, and a reader cannot tell a connector with no schedule from one whose first run is pending.  DISABLED is the terminal one: nothing will run again and nothing the owner or an operator can do will change that. A mailbox lands here when the app registration it authenticated with is retired, which severs the only thing it could have authenticated with. FAILED would invite a retry and NEEDS_REAUTH a consent, and neither can reach a registration that no longer exists — so a client should offer neither. What it still has is its mail, which stays readable.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { ConnectorSyncStatus } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
} satisfies ConnectorSyncStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConnectorSyncStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


