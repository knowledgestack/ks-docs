# ResolvedRef

One id resolved to a human-readable, linkable entity.  Every UUID that appears in an event (its subject, its actor, and any id inside the payload) resolves to one of these so the frontend can render a name and a link instead of a bare UUID. ``object_id`` is what the frontend routes on: a PDO id for a path_part (never the internal path_part_id), or the user id for a user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_type** | **str** |  | 
**object_id** | **UUID** |  | 
**display_name** | **str** |  | [optional] 
**part_type** | **str** |  | [optional] 

## Example

```python
from ksapi.models.resolved_ref import ResolvedRef

# TODO update the JSON string below
json = "{}"
# create an instance of ResolvedRef from a JSON string
resolved_ref_instance = ResolvedRef.from_json(json)
# print the JSON string representation of the object
print(ResolvedRef.to_json())

# convert the object into a dict
resolved_ref_dict = resolved_ref_instance.to_dict()
# create an instance of ResolvedRef from a dict
resolved_ref_from_dict = ResolvedRef.from_dict(resolved_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


