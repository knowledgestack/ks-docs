
# DocumentVersionMetadata

Schema for document_version.system_metadata JSONB field.  Tracks S3 URLs for generated artifacts, pipeline execution state, and document statistics. Convention-based paths (images, page screenshots) are derived from document_id/document_version_id via s3_paths helpers, using a flat S3 layout: documents/{document_id}/{document_version_id}/...  Internal conversion artifact paths (standard_pipeline_json_s3, high_accuracy_*_s3) are excluded from API responses via ``Field(exclude=True)`` so we don\'t expose underlying technology names to external consumers.

## Properties

Name | Type
------------ | -------------
`sourceS3` | string
`cleanedSourceS3` | string
`preconversionSourceS3` | string
`fastPlaintextS3` | string
`hash` | string
`pipelineState` | [PipelineState](PipelineState.md)
`totalPages` | number
`totalSections` | number
`totalChunks` | number
`totalFormulas` | number
`xlsxParseResultS3` | string
`xlsxNamedRanges` | Array&lt;{ [key: string]: any; }&gt;
`xlsxKpiCatalog` | Array&lt;{ [key: string]: any; }&gt;
`citationAnchors` | [Array&lt;XlsxCellAnchorOutputOrDocxParagraphAnchorOutput&gt;](XlsxCellAnchorOutputOrDocxParagraphAnchorOutput.md)
`informationStatistics` | [InformationStatistics](InformationStatistics.md)
`quotaCharged` | boolean
`quotaPageCount` | number
`quotaIdempotencyKey` | string
`fileMd5` | string

## Example

```typescript
import type { DocumentVersionMetadata } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "sourceS3": null,
  "cleanedSourceS3": null,
  "preconversionSourceS3": null,
  "fastPlaintextS3": null,
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
} satisfies DocumentVersionMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DocumentVersionMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


