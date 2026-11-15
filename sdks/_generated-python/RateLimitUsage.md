# RateLimitUsage

A rate limit on the plan allowance and how much of it this interval has used.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reset_interval** | **str** | How long one window lasts, as an ISO 8601 duration.  Either whole calendar months (P1M, P1Y), which step on the calendar from the cycle start, or a fixed length of at least an hour (P1D, P7D, PT5H), which steps by exactly that time; never both. | 
**applies_per_user** | **bool** | True bounds each user&#39;s own spend; false bounds the whole tenant&#39;s. | 
**max_units** | **int** | Allowance units per interval. | 
**used** | **int** | Allowance units spent in the interval. | 
**resets_at** | **datetime** | When the interval ends. | 

## Example

```python
from ksapi.models.rate_limit_usage import RateLimitUsage

# TODO update the JSON string below
json = "{}"
# create an instance of RateLimitUsage from a JSON string
rate_limit_usage_instance = RateLimitUsage.from_json(json)
# print the JSON string representation of the object
print(RateLimitUsage.to_json())

# convert the object into a dict
rate_limit_usage_dict = rate_limit_usage_instance.to_dict()
# create an instance of RateLimitUsage from a dict
rate_limit_usage_from_dict = RateLimitUsage.from_dict(rate_limit_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


