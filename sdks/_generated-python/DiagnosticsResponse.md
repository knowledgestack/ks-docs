# DiagnosticsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**final** | **bool** | True when no item is pending. | 
**traces** | [**List[DiagnosticTraceItem]**](DiagnosticTraceItem.md) |  | 

## Example

```python
from ksapi.models.diagnostics_response import DiagnosticsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticsResponse from a JSON string
diagnostics_response_instance = DiagnosticsResponse.from_json(json)
# print the JSON string representation of the object
print(DiagnosticsResponse.to_json())

# convert the object into a dict
diagnostics_response_dict = diagnostics_response_instance.to_dict()
# create an instance of DiagnosticsResponse from a dict
diagnostics_response_from_dict = DiagnosticsResponse.from_dict(diagnostics_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


