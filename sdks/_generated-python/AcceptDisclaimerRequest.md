# AcceptDisclaimerRequest

Explicit acceptance of the egress disclaimer (must be true).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accepted** | **bool** |  | 

## Example

```python
from ksapi.models.accept_disclaimer_request import AcceptDisclaimerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AcceptDisclaimerRequest from a JSON string
accept_disclaimer_request_instance = AcceptDisclaimerRequest.from_json(json)
# print the JSON string representation of the object
print(AcceptDisclaimerRequest.to_json())

# convert the object into a dict
accept_disclaimer_request_dict = accept_disclaimer_request_instance.to_dict()
# create an instance of AcceptDisclaimerRequest from a dict
accept_disclaimer_request_from_dict = AcceptDisclaimerRequest.from_dict(accept_disclaimer_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


