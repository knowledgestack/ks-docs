# PaginatedResponsePathPartResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[PathPartResponse]**](PathPartResponse.md) | List of items | 
**total** | **int** | Total number of items | 
**limit** | **int** | Number of items per page | 
**offset** | **int** | Number of items to skip | 

## Example

```python
from ksapi.models.paginated_response_path_part_response import PaginatedResponsePathPartResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedResponsePathPartResponse from a JSON string
paginated_response_path_part_response_instance = PaginatedResponsePathPartResponse.from_json(json)
# print the JSON string representation of the object
print(PaginatedResponsePathPartResponse.to_json())

# convert the object into a dict
paginated_response_path_part_response_dict = paginated_response_path_part_response_instance.to_dict()
# create an instance of PaginatedResponsePathPartResponse from a dict
paginated_response_path_part_response_from_dict = PaginatedResponsePathPartResponse.from_dict(paginated_response_path_part_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


