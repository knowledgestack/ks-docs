# StepOutput


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
**steps** | [**List[StepOutput]**](StepOutput.md) |  | [optional] 

## Example

```python
from ksapi.models.step_output import StepOutput

# TODO update the JSON string below
json = "{}"
# create an instance of StepOutput from a JSON string
step_output_instance = StepOutput.from_json(json)
# print the JSON string representation of the object
print(StepOutput.to_json())

# convert the object into a dict
step_output_dict = step_output_instance.to_dict()
# create an instance of StepOutput from a dict
step_output_from_dict = StepOutput.from_dict(step_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


