# MeteredQuotaStatus

Per-metric usage snapshot for the active period.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric** | [**UsageMetric**](UsageMetric.md) |  | 
**used** | **int** | Counter for the active period. May be negative if a refund crossed period boundaries. | 
**limit** | **int** | Snapshot of the cap at period start | 
**period_start** | **datetime** | Active period start (UTC) | 
**period_end** | **datetime** | Active period end (UTC) | 
**additional_balance** | **int** | Persistent additional-quota balance for this metric. Unchanged by period rollover; decremented when included is exhausted, incremented on refund or top-up. | [optional] [default to 0]

## Example

```python
from ksapi.models.metered_quota_status import MeteredQuotaStatus

# TODO update the JSON string below
json = "{}"
# create an instance of MeteredQuotaStatus from a JSON string
metered_quota_status_instance = MeteredQuotaStatus.from_json(json)
# print the JSON string representation of the object
print(MeteredQuotaStatus.to_json())

# convert the object into a dict
metered_quota_status_dict = metered_quota_status_instance.to_dict()
# create an instance of MeteredQuotaStatus from a dict
metered_quota_status_from_dict = MeteredQuotaStatus.from_dict(metered_quota_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


