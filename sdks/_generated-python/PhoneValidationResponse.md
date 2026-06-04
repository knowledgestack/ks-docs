# PhoneValidationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone_validation_id** | **UUID** |  | 

## Example

```python
from ksapi.models.phone_validation_response import PhoneValidationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PhoneValidationResponse from a JSON string
phone_validation_response_instance = PhoneValidationResponse.from_json(json)
# print the JSON string representation of the object
print(PhoneValidationResponse.to_json())

# convert the object into a dict
phone_validation_response_dict = phone_validation_response_instance.to_dict()
# create an instance of PhoneValidationResponse from a dict
phone_validation_response_from_dict = PhoneValidationResponse.from_dict(phone_validation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


