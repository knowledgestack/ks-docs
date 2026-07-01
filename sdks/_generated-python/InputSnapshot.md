# InputSnapshot

One entry of a run's input scope, self-describing its pin semantics.  ``part_type`` is the kind discriminator:  * ``DOCUMENT_VERSION`` — a pinned document version. The DOCUMENT in   the request scope was resolved to its active version at trigger   time; ``path_part_id`` is that DOCUMENT_VERSION path_part and the   entry does not float. * ``FOLDER`` — a live folder reference. ``path_part_id`` is the   FOLDER path_part itself; its contents are NOT captured here and   are enumerated live by the runner (see ``materialized_path`` for   subtree scoping). * ``DATA_SOURCE`` / ``API_CONNECTION`` — a live connector reference   (DB / API). ``path_part_id`` is the connector path_part itself; the   runner queries it live via its connector tools, nothing is captured   here.  The underlying PDO id (DocumentVersion / Folder / connector) is resolved live at run time from ``path_part.metadata_obj_id``, not stored here.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path_part_id** | **UUID** | DOCUMENT_VERSION path_part of the pinned input version, or the path_part of a live FOLDER / DATA_SOURCE / API_CONNECTION reference — see &#x60;&#x60;part_type&#x60;&#x60;. | 
**materialized_path** | **str** |  | 
**part_type** | **str** |  | 
**origin** | [**InputOrigin**](InputOrigin.md) |  | [optional] 

## Example

```python
from ksapi.models.input_snapshot import InputSnapshot

# TODO update the JSON string below
json = "{}"
# create an instance of InputSnapshot from a JSON string
input_snapshot_instance = InputSnapshot.from_json(json)
# print the JSON string representation of the object
print(InputSnapshot.to_json())

# convert the object into a dict
input_snapshot_dict = input_snapshot_instance.to_dict()
# create an instance of InputSnapshot from a dict
input_snapshot_from_dict = InputSnapshot.from_dict(input_snapshot_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


