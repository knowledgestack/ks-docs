# ZipMemberStatusResponse

One member's outcome within a ZIP fan-out (from the workflow query).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**zip_path** | **str** |  | 
**document_id** | **UUID** |  | [optional] 
**document_version_id** | **UUID** |  | [optional] 
**workflow_id** | **str** |  | [optional] 
**error** | **str** |  | [optional] 
**skipped** | **bool** |  | [optional] [default to False]

## Example

```python
from ksapi.models.zip_member_status_response import ZipMemberStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ZipMemberStatusResponse from a JSON string
zip_member_status_response_instance = ZipMemberStatusResponse.from_json(json)
# print the JSON string representation of the object
print(ZipMemberStatusResponse.to_json())

# convert the object into a dict
zip_member_status_response_dict = zip_member_status_response_instance.to_dict()
# create an instance of ZipMemberStatusResponse from a dict
zip_member_status_response_from_dict = ZipMemberStatusResponse.from_dict(zip_member_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


