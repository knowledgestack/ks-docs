# UpdateDataSourceRequest

Rename, move, and/or re-credential a connector (PATCH). All optional.  A body with every field ``None`` is rejected as a no-op 400. ``name`` renames the connector path_part; ``parent_path_part_id`` moves it under a new FOLDER (the move cascades ``materialized_path`` to the modeled-table children). ``connection_config`` supplies a full, fresh credential set (never a partial patch — the stored password is never read back or echoed); it is re-validated before persisting. ``engine`` stays immutable: changing it would invalidate every modeled table's dialect assumptions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**parent_path_part_id** | **UUID** | New parent FOLDER path_part to move the connector under. | [optional] 
**connection_config** | [**ConnectionConfig**](ConnectionConfig.md) | Fresh, whole-object credentials to replace the stored ones. | [optional] 

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


