# IngestZipResponse

Response from dispatching a ZIP archive to async ingestion.  ``workflow_id`` is the fan-out workflow to poll at ``GET /v1/system-jobs/zip-ingestions/{workflow_id}`` for per-member outcomes; it is None when the archive held no ingestible members. ``skipped`` are the artifact/error entries resolved synchronously during classification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workflow_id** | **str** |  | 
**skipped** | [**List[ZipFileResult]**](ZipFileResult.md) |  | 

## Example

```python
from ksapi.models.ingest_zip_response import IngestZipResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IngestZipResponse from a JSON string
ingest_zip_response_instance = IngestZipResponse.from_json(json)
# print the JSON string representation of the object
print(IngestZipResponse.to_json())

# convert the object into a dict
ingest_zip_response_dict = ingest_zip_response_instance.to_dict()
# create an instance of IngestZipResponse from a dict
ingest_zip_response_from_dict = IngestZipResponse.from_dict(ingest_zip_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


