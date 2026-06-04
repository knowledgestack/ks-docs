# CreatePasswordUserRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | Password | 
**email_token** | **str** | Email verification token | 
**first_name** | **str** | First name | [optional] 
**last_name** | **str** | Last name | [optional] 

## Example

```python
from ksapi.models.create_password_user_request import CreatePasswordUserRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePasswordUserRequest from a JSON string
create_password_user_request_instance = CreatePasswordUserRequest.from_json(json)
# print the JSON string representation of the object
print(CreatePasswordUserRequest.to_json())

# convert the object into a dict
create_password_user_request_dict = create_password_user_request_instance.to_dict()
# create an instance of CreatePasswordUserRequest from a dict
create_password_user_request_from_dict = CreatePasswordUserRequest.from_dict(create_password_user_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


