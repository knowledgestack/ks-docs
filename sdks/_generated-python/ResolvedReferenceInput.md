# ResolvedReferenceInput

A parsed reference enriched with display name and path from the database.  Uses ``extra=\"ignore\"`` (not ``\"forbid\"``) because SDK dicts may contain fields not yet modelled here.  Adding ``\"forbid\"`` would cause runtime deserialization failures whenever the SDK adds a new field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ref_type** | [**ReferenceType**](ReferenceType.md) |  | 
**entity_id** | **UUID** |  | 
**display_name** | **str** | Human-readable name for the entity | 
**materialized_path** | **str** | Full materialized path (None for entities without path parts, e.g. tags, users) | [optional] 

## Example

```python
from ksapi.models.resolved_reference_input import ResolvedReferenceInput

# TODO update the JSON string below
json = "{}"
# create an instance of ResolvedReferenceInput from a JSON string
resolved_reference_input_instance = ResolvedReferenceInput.from_json(json)
# print the JSON string representation of the object
print(ResolvedReferenceInput.to_json())

# convert the object into a dict
resolved_reference_input_dict = resolved_reference_input_instance.to_dict()
# create an instance of ResolvedReferenceInput from a dict
resolved_reference_input_from_dict = ResolvedReferenceInput.from_dict(resolved_reference_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


