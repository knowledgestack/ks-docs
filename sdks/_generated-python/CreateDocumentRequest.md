# CreateDocumentRequest

Request to create a new document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Document name | 
**parent_path_part_id** | **UUID** | Parent PathPart ID (must be a FOLDER type) | 
**document_type** | [**DocumentType**](DocumentType.md) |  | 
**document_origin** | [**DocumentOrigin**](DocumentOrigin.md) |  | 

## Example

```python
from ksapi.models.create_document_request import CreateDocumentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDocumentRequest from a JSON string
create_document_request_instance = CreateDocumentRequest.from_json(json)
# print the JSON string representation of the object
print(CreateDocumentRequest.to_json())

# convert the object into a dict
create_document_request_dict = create_document_request_instance.to_dict()
# create an instance of CreateDocumentRequest from a dict
create_document_request_from_dict = CreateDocumentRequest.from_dict(create_document_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


