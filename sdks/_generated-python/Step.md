# Step


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Stable step identifier within the message | 
**name** | **str** | The name of the step | 
**kind** | [**StepKind**](StepKind.md) |  | 
**args** | [**Args**](Args.md) |  | [optional] 
**detail** | **str** |  | [optional] 
**start_time** | **datetime** | The start time of the step | 
**end_time** | **datetime** |  | [optional] 

## Example

```python
from ksapi.models.step import Step

# TODO update the JSON string below
json = "{}"
# create an instance of Step from a JSON string
step_instance = Step.from_json(json)
# print the JSON string representation of the object
print(Step.to_json())

# convert the object into a dict
step_dict = step_instance.to_dict()
# create an instance of Step from a dict
step_from_dict = Step.from_dict(step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


