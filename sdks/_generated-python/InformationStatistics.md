# InformationStatistics

Aggregate statistics for a section subtree or document version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**num_chunks_by_type** | **Dict[str, int]** | Count of chunks by type (e.g. {\&quot;TEXT\&quot;: 42, \&quot;TABLE\&quot;: 3}) | [optional] 
**total_tokens** | **int** | Sum of all chunk content tokens in subtree | [optional] [default to 0]
**num_direct_children** | **int** | Count of immediate children (sections + chunks) | [optional] [default to 0]
**children_depth** | **int** | Max depth to deepest leaf (0 &#x3D; no children) | [optional] [default to 0]

## Example

```python
from ksapi.models.information_statistics import InformationStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of InformationStatistics from a JSON string
information_statistics_instance = InformationStatistics.from_json(json)
# print the JSON string representation of the object
print(InformationStatistics.to_json())

# convert the object into a dict
information_statistics_dict = information_statistics_instance.to_dict()
# create an instance of InformationStatistics from a dict
information_statistics_from_dict = InformationStatistics.from_dict(information_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


