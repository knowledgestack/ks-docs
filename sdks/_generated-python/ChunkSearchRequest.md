# ChunkSearchRequest

Request body for chunk search (dense vector, full-text BM25, or hybrid).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **str** | Search query text | 
**search_type** | [**SearchType**](SearchType.md) |  | [optional] 
**hybrid_profile** | [**HybridSearchProfile**](HybridSearchProfile.md) |  | [optional] 
**dense_weight** | **float** | Optional explicit weight for the dense branch. Must be provided together with sparse_weight and overrides hybrid_profile. | [optional] 
**sparse_weight** | **float** | Optional explicit weight for the sparse branch. Must be provided together with dense_weight and overrides hybrid_profile. | [optional] 
**parent_path_ids** | **List[UUID]** | Path part IDs to search within (non-CHUNK types). Defaults to tenant&#39;s /shared. | [optional] 
**tag_ids** | **List[UUID]** | Filter by tag IDs (AND logic — chunks must have ALL specified tags) | [optional] 
**chunk_types** | [**List[ChunkType]**](ChunkType.md) | Filter by chunk types (TEXT, TABLE, IMAGE, HTML, UNKNOWN). Only chunks matching one of the listed types are returned. | [optional] 
**ingestion_time_after** | **datetime** | Only chunks ingested after this timestamp | [optional] 
**active_version_only** | **bool** | Only return chunks from the active document version | [optional] [default to True]
**top_k** | **int** | Number of results (1-50) | [optional] [default to 5]
**score_threshold** | **float** | Minimum similarity score | [optional] [default to 0.3]
**with_document** | **bool** | Include ancestor document_id and document_version_id in each result | [optional] [default to False]

## Example

```python
from ksapi.models.chunk_search_request import ChunkSearchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ChunkSearchRequest from a JSON string
chunk_search_request_instance = ChunkSearchRequest.from_json(json)
# print the JSON string representation of the object
print(ChunkSearchRequest.to_json())

# convert the object into a dict
chunk_search_request_dict = chunk_search_request_instance.to_dict()
# create an instance of ChunkSearchRequest from a dict
chunk_search_request_from_dict = ChunkSearchRequest.from_dict(chunk_search_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


