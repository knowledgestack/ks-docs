# CreatePhonePasswordUserRequest

Phone signup — the phone is retrieved from the validation record.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | Password | 
**code** | **str** | 6-digit verification code | 
**phone_validation_id** | **UUID** | ID returned by phone_verification | 
**first_name** | **str** | First name | [optional] 
**last_name** | **str** | Last name | [optional] 

## Example

```python
from ksapi.models.create_phone_password_user_request import CreatePhonePasswordUserRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePhonePasswordUserRequest from a JSON string
create_phone_password_user_request_instance = CreatePhonePasswordUserRequest.from_json(json)
# print the JSON string representation of the object
print(CreatePhonePasswordUserRequest.to_json())

# convert the object into a dict
create_phone_password_user_request_dict = create_phone_password_user_request_instance.to_dict()
# create an instance of CreatePhonePasswordUserRequest from a dict
create_phone_password_user_request_from_dict = CreatePhonePasswordUserRequest.from_dict(create_phone_password_user_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


