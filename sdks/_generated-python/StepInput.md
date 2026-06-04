# StepInput


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
**steps** | [**List[StepInput]**](StepInput.md) |  | [optional] 

## Example

```python
from ksapi.models.step_input import StepInput

# TODO update the JSON string below
json = "{}"
# create an instance of StepInput from a JSON string
step_input_instance = StepInput.from_json(json)
# print the JSON string representation of the object
print(StepInput.to_json())

# convert the object into a dict
step_input_dict = step_input_instance.to_dict()
# create an instance of StepInput from a dict
step_input_from_dict = StepInput.from_dict(step_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


