# PixelRegion

A changed rectangle within an image, in the new image's pixel space.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**x** | **int** |  | 
**y** | **int** |  | 
**width** | **int** |  | 
**height** | **int** |  | 

## Example

```python
from ksapi.models.pixel_region import PixelRegion

# TODO update the JSON string below
json = "{}"
# create an instance of PixelRegion from a JSON string
pixel_region_instance = PixelRegion.from_json(json)
# print the JSON string representation of the object
print(PixelRegion.to_json())

# convert the object into a dict
pixel_region_dict = pixel_region_instance.to_dict()
# create an instance of PixelRegion from a dict
pixel_region_from_dict = PixelRegion.from_dict(pixel_region_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


