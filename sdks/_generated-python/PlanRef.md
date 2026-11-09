# PlanRef

A plan by id, with its name to show.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** | The plan_definition id, e.g. for plan checkout. | 
**name** | **str** |  | 

## Example

```python
from ksapi.models.plan_ref import PlanRef

# TODO update the JSON string below
json = "{}"
# create an instance of PlanRef from a JSON string
plan_ref_instance = PlanRef.from_json(json)
# print the JSON string representation of the object
print(PlanRef.to_json())

# convert the object into a dict
plan_ref_dict = plan_ref_instance.to_dict()
# create an instance of PlanRef from a dict
plan_ref_from_dict = PlanRef.from_dict(plan_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


