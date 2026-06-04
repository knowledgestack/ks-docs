# ResponseSendPwResetEmail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_id** | **UUID** |  | 
**phone_validation_id** | **UUID** |  | 

## Example

```python
from ksapi.models.response_send_pw_reset_email import ResponseSendPwResetEmail

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseSendPwResetEmail from a JSON string
response_send_pw_reset_email_instance = ResponseSendPwResetEmail.from_json(json)
# print the JSON string representation of the object
print(ResponseSendPwResetEmail.to_json())

# convert the object into a dict
response_send_pw_reset_email_dict = response_send_pw_reset_email_instance.to_dict()
# create an instance of ResponseSendPwResetEmail from a dict
response_send_pw_reset_email_from_dict = ResponseSendPwResetEmail.from_dict(response_send_pw_reset_email_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


