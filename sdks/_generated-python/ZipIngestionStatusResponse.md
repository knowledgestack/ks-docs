# ZipIngestionStatusResponse

Status of a ZIP fan-out: live Temporal state + per-member outcomes.  ``files`` reflects progress so far — members that have been dispatched (``workflow_id`` set), failed to dispatch (``error`` set), or were skipped as artifacts. Poll until ``temporal_status`` is terminal (e.g. ``COMPLETED``).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workflow_id** | **str** |  | 
**temporal_status** | **str** |  | 
**files** | [**List[ZipMemberStatusResponse]**](ZipMemberStatusResponse.md) |  | 

## Example

```python
from ksapi.models.zip_ingestion_status_response import ZipIngestionStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ZipIngestionStatusResponse from a JSON string
zip_ingestion_status_response_instance = ZipIngestionStatusResponse.from_json(json)
# print the JSON string representation of the object
print(ZipIngestionStatusResponse.to_json())

# convert the object into a dict
zip_ingestion_status_response_dict = zip_ingestion_status_response_instance.to_dict()
# create an instance of ZipIngestionStatusResponse from a dict
zip_ingestion_status_response_from_dict = ZipIngestionStatusResponse.from_dict(zip_ingestion_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


