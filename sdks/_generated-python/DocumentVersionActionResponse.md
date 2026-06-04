# DocumentVersionActionResponse

Response from a document version action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version_id** | **UUID** | DocumentVersion ID | 
**action** | [**DocumentVersionAction**](DocumentVersionAction.md) |  | 
**workflow_id** | **str** | Temporal workflow ID | 

## Example

```python
from ksapi.models.document_version_action_response import DocumentVersionActionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentVersionActionResponse from a JSON string
document_version_action_response_instance = DocumentVersionActionResponse.from_json(json)
# print the JSON string representation of the object
print(DocumentVersionActionResponse.to_json())

# convert the object into a dict
document_version_action_response_dict = document_version_action_response_instance.to_dict()
# create an instance of DocumentVersionActionResponse from a dict
document_version_action_response_from_dict = DocumentVersionActionResponse.from_dict(document_version_action_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


