# PhoneVerificationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone_number** | **str** | Subscriber number as a string of digits, no country code (e.g. &#39;13800138000&#39;). The SMS provider determines routing. | 

## Example

```python
from ksapi.models.phone_verification_request import PhoneVerificationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PhoneVerificationRequest from a JSON string
phone_verification_request_instance = PhoneVerificationRequest.from_json(json)
# print the JSON string representation of the object
print(PhoneVerificationRequest.to_json())

# convert the object into a dict
phone_verification_request_dict = phone_verification_request_instance.to_dict()
# create an instance of PhoneVerificationRequest from a dict
phone_verification_request_from_dict = PhoneVerificationRequest.from_dict(phone_verification_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


