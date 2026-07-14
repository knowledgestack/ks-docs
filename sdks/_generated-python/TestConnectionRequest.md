# TestConnectionRequest

Test a connection without persisting it.  Exactly one mode must be supplied: fresh creds (``engine`` + ``connection_config`` + ``parent_path_part_id``) or a stored connector (``data_source_id``). The handler rejects zero or both modes with a 400.  Fresh mode requires ``parent_path_part_id`` and is gated by write access to that folder — the same permission as creating a connector there. This stops an authenticated user from turning the probe into an arbitrary-host reachability scanner (SSRF) against internal networks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source_id** | **UUID** | Test a stored connector instead of fresh creds | [optional] 
**engine** | [**DataSourceEngine**](DataSourceEngine.md) |  | [optional] 
**connection_config** | [**ConnectionConfig**](ConnectionConfig.md) |  | [optional] 
**parent_path_part_id** | **UUID** | Fresh-creds mode: the folder the connector would be created under; the probe is gated by write access to it. | [optional] 

## Example

```python
from ksapi.models.test_connection_request import TestConnectionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TestConnectionRequest from a JSON string
test_connection_request_instance = TestConnectionRequest.from_json(json)
# print the JSON string representation of the object
print(TestConnectionRequest.to_json())

# convert the object into a dict
test_connection_request_dict = test_connection_request_instance.to_dict()
# create an instance of TestConnectionRequest from a dict
test_connection_request_from_dict = TestConnectionRequest.from_dict(test_connection_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


