# LineageEdgeResponse

An edge in the lineage graph.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent_chunk_id** | **UUID** | Parent chunk ID (source) | 
**chunk_id** | **UUID** | Child chunk ID (derived) | 

## Example

```python
from ksapi.models.lineage_edge_response import LineageEdgeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LineageEdgeResponse from a JSON string
lineage_edge_response_instance = LineageEdgeResponse.from_json(json)
# print the JSON string representation of the object
print(LineageEdgeResponse.to_json())

# convert the object into a dict
lineage_edge_response_dict = lineage_edge_response_instance.to_dict()
# create an instance of LineageEdgeResponse from a dict
lineage_edge_response_from_dict = LineageEdgeResponse.from_dict(lineage_edge_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


