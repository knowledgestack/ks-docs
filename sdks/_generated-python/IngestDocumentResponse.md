# IngestDocumentResponse

Response with workflow execution details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workflow_id** | **str** | Temporal workflow ID | 
**document_id** | **UUID** |  | 
**document_version_id** | **UUID** |  | 
**folder_id** | **UUID** | Folder created to hold this upload and its members. Set for email uploads, which always nest inside their own folder; null for every other type, which ingest directly into path_part_id. | [optional] 
**attachment_count** | **int** | Members found on an email upload, each becoming its own document beside the email: the attachments of a single message, or the messages of an .mbox archive (whose own attachments are then expanded one level deeper). Always 0 for non-email uploads. Null for a .pst, whose members are enumerated only by the worker fan-out — poll attachment_workflow_id for per-member outcomes. | [optional] 
**attachment_workflow_id** | **str** | Fan-out workflow ingesting the members. Poll GET /v1/system-jobs/zip-ingestions/{id} for per-member outcomes. Null when the upload had no ingestible members. | [optional] 

## Example

```python
from ksapi.models.ingest_document_response import IngestDocumentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IngestDocumentResponse from a JSON string
ingest_document_response_instance = IngestDocumentResponse.from_json(json)
# print the JSON string representation of the object
print(IngestDocumentResponse.to_json())

# convert the object into a dict
ingest_document_response_dict = ingest_document_response_instance.to_dict()
# create an instance of IngestDocumentResponse from a dict
ingest_document_response_from_dict = IngestDocumentResponse.from_dict(ingest_document_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


