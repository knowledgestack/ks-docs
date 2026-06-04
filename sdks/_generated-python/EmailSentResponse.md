# EmailSentResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_id** | **UUID** |  | 

## Example

```python
from ksapi.models.email_sent_response import EmailSentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EmailSentResponse from a JSON string
email_sent_response_instance = EmailSentResponse.from_json(json)
# print the JSON string representation of the object
print(EmailSentResponse.to_json())

# convert the object into a dict
email_sent_response_dict = email_sent_response_instance.to_dict()
# create an instance of EmailSentResponse from a dict
email_sent_response_from_dict = EmailSentResponse.from_dict(email_sent_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


