# ChangePhoneNumberRequest

Phone change — the new phone is retrieved from the validation record.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone_validation_id** | **UUID** |  | 
**code** | **str** |  | 

## Example

```python
from ksapi.models.change_phone_number_request import ChangePhoneNumberRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ChangePhoneNumberRequest from a JSON string
change_phone_number_request_instance = ChangePhoneNumberRequest.from_json(json)
# print the JSON string representation of the object
print(ChangePhoneNumberRequest.to_json())

# convert the object into a dict
change_phone_number_request_dict = change_phone_number_request_instance.to_dict()
# create an instance of ChangePhoneNumberRequest from a dict
change_phone_number_request_from_dict = ChangePhoneNumberRequest.from_dict(change_phone_number_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


