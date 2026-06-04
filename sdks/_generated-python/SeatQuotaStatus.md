# SeatQuotaStatus

Live seat count for the tenant.  ``used`` is the number of active (non-deactivated) ``TenantUser`` rows.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**used** | **int** | Active seats currently consumed | 
**limit** | **int** | Maximum seats permitted for the tenant | 

## Example

```python
from ksapi.models.seat_quota_status import SeatQuotaStatus

# TODO update the JSON string below
json = "{}"
# create an instance of SeatQuotaStatus from a JSON string
seat_quota_status_instance = SeatQuotaStatus.from_json(json)
# print the JSON string representation of the object
print(SeatQuotaStatus.to_json())

# convert the object into a dict
seat_quota_status_dict = seat_quota_status_instance.to_dict()
# create an instance of SeatQuotaStatus from a dict
seat_quota_status_from_dict = SeatQuotaStatus.from_dict(seat_quota_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


