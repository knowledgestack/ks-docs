# LineageGraphResponse

Complete lineage graph with nodes and edges.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nodes** | [**List[LineageNodeResponse]**](LineageNodeResponse.md) | Chunk nodes in the graph | 
**edges** | [**List[LineageEdgeResponse]**](LineageEdgeResponse.md) | Lineage edges in the graph | 

## Example

```python
from ksapi.models.lineage_graph_response import LineageGraphResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LineageGraphResponse from a JSON string
lineage_graph_response_instance = LineageGraphResponse.from_json(json)
# print the JSON string representation of the object
print(LineageGraphResponse.to_json())

# convert the object into a dict
lineage_graph_response_dict = lineage_graph_response_instance.to_dict()
# create an instance of LineageGraphResponse from a dict
lineage_graph_response_from_dict = LineageGraphResponse.from_dict(lineage_graph_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


