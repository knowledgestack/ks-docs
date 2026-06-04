# Citation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chunk_id** | **UUID** |  | 
**quote** | **str** | The quote from the chunk | 
**start_char** | **int** | The 0-based start character of the quote in the chunk | 
**length** | **int** | The length of the quote | 

## Example

```python
from ksapi.models.citation import Citation

# TODO update the JSON string below
json = "{}"
# create an instance of Citation from a JSON string
citation_instance = Citation.from_json(json)
# print the JSON string representation of the object
print(Citation.to_json())

# convert the object into a dict
citation_dict = citation_instance.to_dict()
# create an instance of Citation from a dict
citation_from_dict = Citation.from_dict(citation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


