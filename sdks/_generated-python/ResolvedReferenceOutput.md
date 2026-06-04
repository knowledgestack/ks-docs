# ResolvedReferenceOutput

A parsed reference enriched with display name and path from the database.  Uses ``extra=\"ignore\"`` (not ``\"forbid\"``) because SDK dicts may contain fields not yet modelled here.  Adding ``\"forbid\"`` would cause runtime deserialization failures whenever the SDK adds a new field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ref_type** | **str** |  | 
**entity_id** | **UUID** |  | 
**display_name** | **str** | Human-readable name for the entity | 
**materialized_path** | **str** | Full materialized path (None for entities without path parts, e.g. tags, users) | [optional] 

## Example

```python
from ksapi.models.resolved_reference_output import ResolvedReferenceOutput

# TODO update the JSON string below
json = "{}"
# create an instance of ResolvedReferenceOutput from a JSON string
resolved_reference_output_instance = ResolvedReferenceOutput.from_json(json)
# print the JSON string representation of the object
print(ResolvedReferenceOutput.to_json())

# convert the object into a dict
resolved_reference_output_dict = resolved_reference_output_instance.to_dict()
# create an instance of ResolvedReferenceOutput from a dict
resolved_reference_output_from_dict = ResolvedReferenceOutput.from_dict(resolved_reference_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


