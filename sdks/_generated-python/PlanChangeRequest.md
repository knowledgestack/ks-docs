# PlanChangeRequest

Change a subscriber's plan or seats: never fewer seats than active members.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plan_id** | **UUID** |  | 
**interval** | [**BillingInterval**](BillingInterval.md) |  | 
**num_seats** | **int** |  | 

## Example

```python
from ksapi.models.plan_change_request import PlanChangeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PlanChangeRequest from a JSON string
plan_change_request_instance = PlanChangeRequest.from_json(json)
# print the JSON string representation of the object
print(PlanChangeRequest.to_json())

# convert the object into a dict
plan_change_request_dict = plan_change_request_instance.to_dict()
# create an instance of PlanChangeRequest from a dict
plan_change_request_from_dict = PlanChangeRequest.from_dict(plan_change_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


