# DocumentCheckoutResponse

Active checkout state on a document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenant_id** | **UUID** | Tenant ID | 
**document_id** | **UUID** | Document ID | 
**holder** | [**UserInfo**](UserInfo.md) |  | 
**acquired_at** | **datetime** | When the checkout was acquired | 

## Example

```python
from ksapi.models.document_checkout_response import DocumentCheckoutResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentCheckoutResponse from a JSON string
document_checkout_response_instance = DocumentCheckoutResponse.from_json(json)
# print the JSON string representation of the object
print(DocumentCheckoutResponse.to_json())

# convert the object into a dict
document_checkout_response_dict = document_checkout_response_instance.to_dict()
# create an instance of DocumentCheckoutResponse from a dict
document_checkout_response_from_dict = DocumentCheckoutResponse.from_dict(document_checkout_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


