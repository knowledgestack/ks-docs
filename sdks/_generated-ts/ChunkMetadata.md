
# ChunkMetadata

Metadata for a chunk including source document references.

## Properties

Name | Type
------------ | -------------
`polygons` | [Array&lt;PolygonReference&gt;](PolygonReference.md)
`s3Urls` | Array&lt;string&gt;
`summary` | string
`extractedTextS3Uri` | string
`secondaryTaxonomy` | [ImageTaxonomy](ImageTaxonomy.md)
`sheetName` | string
`blockType` | string
`sourceUri` | string
`enrichedHtml` | string
`cellRange` | string
`dependencySummary` | { [key: string]: any; }
`formulas` | Array&lt;{ [key: string]: string; }&gt;
`keyCells` | Array&lt;string&gt;
`namedRanges` | Array&lt;string&gt;

## Example

```typescript
import type { ChunkMetadata } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "polygons": null,
  "s3Urls": null,
  "summary": null,
  "extractedTextS3Uri": null,
  "secondaryTaxonomy": null,
  "sheetName": null,
  "blockType": null,
  "sourceUri": null,
  "enrichedHtml": null,
  "cellRange": null,
  "dependencySummary": null,
  "formulas": null,
  "keyCells": null,
  "namedRanges": null,
} satisfies ChunkMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChunkMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


