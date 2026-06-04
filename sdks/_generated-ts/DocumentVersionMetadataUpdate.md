
# DocumentVersionMetadataUpdate

Partial update schema for document version metadata.  All fields are optional.  Only non-``None`` fields are merged into the existing metadata dict.

## Properties

Name | Type
------------ | -------------
`sourceS3` | string
`cleanedSourceS3` | string
`standardPipelineJsonS3` | string
`fastPlaintextS3` | string
`highAccuracyContentListS3` | string
`highAccuracyMiddleS3` | string
`hash` | string
`pipelineState` | [PipelineState](PipelineState.md)
`totalPages` | number
`totalSections` | number
`totalChunks` | number
`totalFormulas` | number
`xlsxParseResultS3` | string
`xlsxNamedRanges` | Array&lt;{ [key: string]: any; }&gt;
`xlsxKpiCatalog` | Array&lt;{ [key: string]: any; }&gt;
`citationAnchors` | [Array&lt;XlsxCellAnchorInputOrDocxParagraphAnchorInput&gt;](XlsxCellAnchorInputOrDocxParagraphAnchorInput.md)
`informationStatistics` | [InformationStatistics](InformationStatistics.md)
`quotaCharged` | boolean
`quotaPageCount` | number
`quotaIdempotencyKey` | string
`fileMd5` | string

## Example

```typescript
import type { DocumentVersionMetadataUpdate } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "sourceS3": null,
  "cleanedSourceS3": null,
  "standardPipelineJsonS3": null,
  "fastPlaintextS3": null,
  "highAccuracyContentListS3": null,
  "highAccuracyMiddleS3": null,
  "hash": null,
  "pipelineState": null,
  "totalPages": null,
  "totalSections": null,
  "totalChunks": null,
  "totalFormulas": null,
  "xlsxParseResultS3": null,
  "xlsxNamedRanges": null,
  "xlsxKpiCatalog": null,
  "citationAnchors": null,
  "informationStatistics": null,
  "quotaCharged": null,
  "quotaPageCount": null,
  "quotaIdempotencyKey": null,
  "fileMd5": null,
} satisfies DocumentVersionMetadataUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DocumentVersionMetadataUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


