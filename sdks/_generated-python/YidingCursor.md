# YidingCursor

How far a crawl has read; a missing mark means \"never\", not \"day zero\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_synced_order_ts** | **datetime** | Seating time of the last order read | [optional] 
**last_synced_user_ts** | **datetime** | When the customer list was last refreshed | [optional] 

## Example

```python
from ksapi.models.yiding_cursor import YidingCursor

# TODO update the JSON string below
json = "{}"
# create an instance of YidingCursor from a JSON string
yiding_cursor_instance = YidingCursor.from_json(json)
# print the JSON string representation of the object
print(YidingCursor.to_json())

# convert the object into a dict
yiding_cursor_dict = yiding_cursor_instance.to_dict()
# create an instance of YidingCursor from a dict
yiding_cursor_from_dict = YidingCursor.from_dict(yiding_cursor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


