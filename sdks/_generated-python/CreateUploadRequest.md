# CreateUploadRequest

Begin a resumable upload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent_path_id** | **UUID** | Parent folder path part ID (FOLDER) | 
**name** | **str** | Document name | 
**filename** | **str** | Original filename; its extension selects the type + size cap | 
**size_bytes** | **int** | Declared total size; fast-rejected against the type cap | 
**tag_ids** | **List[UUID]** | Tags applied to the document on completion (mirrors the buffered ingest endpoints so a mixed submit tags recordings too) | [optional] 
**workflow_run_id** | **UUID** | Workflow run this upload belongs to; attributes the resulting document to the run in the audit log. Must be sent together with workflow_definition_id, and only by an assumed identity. | [optional] 
**workflow_definition_id** | **UUID** | Workflow definition for workflow_run_id. | [optional] 
**idempotency_key** | **str** | Replay key for callers that retry (e.g. the ZIP fan-out); completing twice with the same key replays the existing document instead of creating a duplicate. | [optional] 

## Example

```python
from ksapi.models.create_upload_request import CreateUploadRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateUploadRequest from a JSON string
create_upload_request_instance = CreateUploadRequest.from_json(json)
# print the JSON string representation of the object
print(CreateUploadRequest.to_json())

# convert the object into a dict
create_upload_request_dict = create_upload_request_instance.to_dict()
# create an instance of CreateUploadRequest from a dict
create_upload_request_from_dict = CreateUploadRequest.from_dict(create_upload_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


