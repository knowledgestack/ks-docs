
# DiagnosticsResponse


## Properties

Name | Type
------------ | -------------
`_final` | boolean
`traces` | [Array&lt;DiagnosticTraceItem&gt;](DiagnosticTraceItem.md)

## Example

```typescript
import type { DiagnosticsResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "_final": null,
  "traces": null,
} satisfies DiagnosticsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiagnosticsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


