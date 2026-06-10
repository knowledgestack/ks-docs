# DiffSpan

A changed character range within a row's text (for highlighting).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start** | **int** |  | 
**end** | **int** |  | 

## Example

```python
from ksapi.models.diff_span import DiffSpan

# TODO update the JSON string below
json = "{}"
# create an instance of DiffSpan from a JSON string
diff_span_instance = DiffSpan.from_json(json)
# print the JSON string representation of the object
print(DiffSpan.to_json())

# convert the object into a dict
diff_span_dict = diff_span_instance.to_dict()
# create an instance of DiffSpan from a dict
diff_span_from_dict = DiffSpan.from_dict(diff_span_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


