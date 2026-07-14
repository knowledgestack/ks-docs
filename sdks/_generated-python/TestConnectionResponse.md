# TestConnectionResponse

Connection-test outcome carried in the body (200 either way).  ``error`` holds the failure detail when ``success`` is false so the FE can render inline validation instead of handling a 400.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | 
**error** | **str** |  | [optional] 

## Example

```python
from ksapi.models.test_connection_response import TestConnectionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TestConnectionResponse from a JSON string
test_connection_response_instance = TestConnectionResponse.from_json(json)
# print the JSON string representation of the object
print(TestConnectionResponse.to_json())

# convert the object into a dict
test_connection_response_dict = test_connection_response_instance.to_dict()
# create an instance of TestConnectionResponse from a dict
test_connection_response_from_dict = TestConnectionResponse.from_dict(test_connection_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


