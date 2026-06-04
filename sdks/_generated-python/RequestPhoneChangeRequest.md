# RequestPhoneChangeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone_number** | **str** | Subscriber number as a string of digits, no country code (e.g. &#39;13800138000&#39;). The SMS provider determines routing. | 

## Example

```python
from ksapi.models.request_phone_change_request import RequestPhoneChangeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RequestPhoneChangeRequest from a JSON string
request_phone_change_request_instance = RequestPhoneChangeRequest.from_json(json)
# print the JSON string representation of the object
print(RequestPhoneChangeRequest.to_json())

# convert the object into a dict
request_phone_change_request_dict = request_phone_change_request_instance.to_dict()
# create an instance of RequestPhoneChangeRequest from a dict
request_phone_change_request_from_dict = RequestPhoneChangeRequest.from_dict(request_phone_change_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


