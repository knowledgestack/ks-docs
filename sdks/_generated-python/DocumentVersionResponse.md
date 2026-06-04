# DocumentVersionResponse

DocumentVersion response model.  Shared schema for DocumentVersion responses, used by Document endpoints and DocumentVersion endpoints.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** | DocumentVersion ID | 
**path_part_id** | **UUID** | PathPart ID | 
**version** | **int** | Version number (0, 1, 2...) | 
**name** | **str** | Auto-generated name from path_part (v0, v1, ...) | 
**parent_path_id** | **UUID** | Document&#39;s PathPart ID | 
**materialized_path** | **str** | Full materialized path from root | 
**system_managed** | **bool** | Whether this version is system-managed | 
**tenant_id** | **UUID** | Tenant ID | 
**uploader** | [**UserInfo**](UserInfo.md) |  | 
**created_at** | **datetime** | Creation timestamp | 
**updated_at** | **datetime** | Last update timestamp | 
**asset_s3_url** | **str** | Presigned URL to download the source document (6-hour validity) | [optional] 
**fast_plaintext_url** | **str** | Presigned URL to download the fast plaintext export (6-hour validity) | [optional] 
**page_screenshot_urls** | **List[str]** | Presigned URLs (6-hour validity) to per-page WEBP screenshots in page order: index 0 is page 1, index N-1 is page N. Populated only when the request includes include_page_screenshots&#x3D;true; null otherwise. | [optional] 
**system_metadata** | [**DocumentVersionMetadata**](DocumentVersionMetadata.md) |  | [optional] 

## Example

```python
from ksapi.models.document_version_response import DocumentVersionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentVersionResponse from a JSON string
document_version_response_instance = DocumentVersionResponse.from_json(json)
# print the JSON string representation of the object
print(DocumentVersionResponse.to_json())

# convert the object into a dict
document_version_response_dict = document_version_response_instance.to_dict()
# create an instance of DocumentVersionResponse from a dict
document_version_response_from_dict = DocumentVersionResponse.from_dict(document_version_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


