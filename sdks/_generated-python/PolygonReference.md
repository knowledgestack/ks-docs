# PolygonReference

Reference to a polygon on a specific page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | **int** | The page number of the source document where the polygon is located. | 
**polygon** | [**Polygon**](Polygon.md) |  | 

## Example

```python
from ksapi.models.polygon_reference import PolygonReference

# TODO update the JSON string below
json = "{}"
# create an instance of PolygonReference from a JSON string
polygon_reference_instance = PolygonReference.from_json(json)
# print the JSON string representation of the object
print(PolygonReference.to_json())

# convert the object into a dict
polygon_reference_dict = polygon_reference_instance.to_dict()
# create an instance of PolygonReference from a dict
polygon_reference_from_dict = PolygonReference.from_dict(polygon_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


