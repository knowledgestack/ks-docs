# EmailAttachmentError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filename** | **str** |  | 
**error** | **str** |  | 

## Example

```python
from ksapi.models.email_attachment_error import EmailAttachmentError

# TODO update the JSON string below
json = "{}"
# create an instance of EmailAttachmentError from a JSON string
email_attachment_error_instance = EmailAttachmentError.from_json(json)
# print the JSON string representation of the object
print(EmailAttachmentError.to_json())

# convert the object into a dict
email_attachment_error_dict = email_attachment_error_instance.to_dict()
# create an instance of EmailAttachmentError from a dict
email_attachment_error_from_dict = EmailAttachmentError.from_dict(email_attachment_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


