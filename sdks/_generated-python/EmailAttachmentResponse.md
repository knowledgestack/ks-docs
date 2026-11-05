# EmailAttachmentResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_id** | **UUID** |  | 
**document_version_id** | **UUID** |  | 
**path_part_id** | **UUID** |  | 
**name** | **str** |  | 
**document_type** | [**DocumentType**](DocumentType.md) |  | 
**created_at** | **datetime** |  | 

## Example

```python
from ksapi.models.email_attachment_response import EmailAttachmentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EmailAttachmentResponse from a JSON string
email_attachment_response_instance = EmailAttachmentResponse.from_json(json)
# print the JSON string representation of the object
print(EmailAttachmentResponse.to_json())

# convert the object into a dict
email_attachment_response_dict = email_attachment_response_instance.to_dict()
# create an instance of EmailAttachmentResponse from a dict
email_attachment_response_from_dict = EmailAttachmentResponse.from_dict(email_attachment_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


