# SeatsError

The seats a purchase or plan change asked for, and what refused them.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asked** | **int** | The seats the request asked for. | 
**members** | **int** | The workspace&#39;s active members: set on &#39;members_exceed_seats&#39;. | [optional] 
**plan_limit** | **int** | The most seats the plan sells: set on &#39;seats_above_plan_limit&#39;. | [optional] 

## Example

```python
from ksapi.models.seats_error import SeatsError

# TODO update the JSON string below
json = "{}"
# create an instance of SeatsError from a JSON string
seats_error_instance = SeatsError.from_json(json)
# print the JSON string representation of the object
print(SeatsError.to_json())

# convert the object into a dict
seats_error_dict = seats_error_instance.to_dict()
# create an instance of SeatsError from a dict
seats_error_from_dict = SeatsError.from_dict(seats_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


