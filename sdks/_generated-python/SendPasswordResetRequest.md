# SendPasswordResetRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **str** | Delivery channel for the password-reset code/link. | [optional] [default to 'EMAIL']
**email** | **str** | Email address | [optional] 
**phone_number** | **str** | Subscriber number as a string of digits, no country code (e.g. &#39;13800138000&#39;). | [optional] 

## Example

```python
from ksapi.models.send_password_reset_request import SendPasswordResetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendPasswordResetRequest from a JSON string
send_password_reset_request_instance = SendPasswordResetRequest.from_json(json)
# print the JSON string representation of the object
print(SendPasswordResetRequest.to_json())

# convert the object into a dict
send_password_reset_request_dict = send_password_reset_request_instance.to_dict()
# create an instance of SendPasswordResetRequest from a dict
send_password_reset_request_from_dict = SendPasswordResetRequest.from_dict(send_password_reset_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


