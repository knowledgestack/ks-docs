# DocumentDownloadResponse

A short-lived, audited download link for a document-version artifact.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** |  | 
**expires_in** | **int** |  | 
**document_id** | **UUID** |  | 
**version_id** | **UUID** |  | 
**artifact** | [**DownloadArtifact**](DownloadArtifact.md) |  | 

## Example

```python
from ksapi.models.document_download_response import DocumentDownloadResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentDownloadResponse from a JSON string
document_download_response_instance = DocumentDownloadResponse.from_json(json)
# print the JSON string representation of the object
print(DocumentDownloadResponse.to_json())

# convert the object into a dict
document_download_response_dict = document_download_response_instance.to_dict()
# create an instance of DocumentDownloadResponse from a dict
document_download_response_from_dict = DocumentDownloadResponse.from_dict(document_download_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


