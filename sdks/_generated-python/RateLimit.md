# RateLimit

At most ``max_units`` of a plan allowance spent per ``reset_interval``.  Intervals step from the tenant's cycle start, like allowance windows. A rate limit grants nothing: it paces the allowance, and purchased top-ups are drawn past it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reset_interval** | **str** | How long one window lasts, as an ISO 8601 duration.  Either whole calendar months (P1M, P1Y), which step on the calendar from the cycle start, or a fixed length of at least an hour (P1D, P7D, PT5H), which steps by exactly that time; never both. | 
**applies_per_user** | **bool** | True bounds each user&#39;s own spend; false bounds the whole tenant&#39;s. | 
**max_units** | **int** | Allowance units per interval. | 

## Example

```python
from ksapi.models.rate_limit import RateLimit

# TODO update the JSON string below
json = "{}"
# create an instance of RateLimit from a JSON string
rate_limit_instance = RateLimit.from_json(json)
# print the JSON string representation of the object
print(RateLimit.to_json())

# convert the object into a dict
rate_limit_dict = rate_limit_instance.to_dict()
# create an instance of RateLimit from a dict
rate_limit_from_dict = RateLimit.from_dict(rate_limit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


