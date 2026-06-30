# UpdateDataSourceRequest

Rename and/or move a connector (PATCH). Both fields optional.  A body with both ``None`` is rejected as a no-op 400. ``name`` renames the connector path_part; ``parent_path_part_id`` moves it under a new FOLDER (the move cascades ``materialized_path`` to the modeled-table children). Connection credentials and engine are not editable here.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**parent_path_part_id** | **UUID** | New parent FOLDER path_part to move the connector under. | [optional] 

## Example

```python
from ksapi.models.update_data_source_request import UpdateDataSourceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDataSourceRequest from a JSON string
update_data_source_request_instance = UpdateDataSourceRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDataSourceRequest.to_json())

# convert the object into a dict
update_data_source_request_dict = update_data_source_request_instance.to_dict()
# create an instance of UpdateDataSourceRequest from a dict
update_data_source_request_from_dict = UpdateDataSourceRequest.from_dict(update_data_source_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


