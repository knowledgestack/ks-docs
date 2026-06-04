# ValidateResetCodeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone_validation_id** | **UUID** |  | 
**code** | **str** |  | 

## Example

```python
from ksapi.models.validate_reset_code_request import ValidateResetCodeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateResetCodeRequest from a JSON string
validate_reset_code_request_instance = ValidateResetCodeRequest.from_json(json)
# print the JSON string representation of the object
print(ValidateResetCodeRequest.to_json())

# convert the object into a dict
validate_reset_code_request_dict = validate_reset_code_request_instance.to_dict()
# create an instance of ValidateResetCodeRequest from a dict
validate_reset_code_request_from_dict = ValidateResetCodeRequest.from_dict(validate_reset_code_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


