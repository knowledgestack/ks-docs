# SegmentSpan

One ASR segment's span inside a media chunk (media chunks only).  Field names are deliberately compact — a media document stores hundreds of chunks x tens of spans each in ``chunk_metadata`` JSONB. Measured worst case is a 4-hour Mandarin recording: 175 chunks x ~33 spans, ~190 KB total.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**s** | **int** | Segment start in the media, ms from start. | 
**e** | **int** | Segment end in the media, ms from start. | 
**c** | **int** | Character offset of this segment&#39;s text within the chunk&#39;s joined content — maps a position in the chunk text back to a moment in the recording. | 
**k** | **int** | Speaker label for this segment, 0-indexed within the recording. It identifies turns, not people — there is no voiceprint enrollment, so label 0 in one meeting is unrelated to label 0 in another. None when the ASR provider does not diarize. | [optional] 

## Example

```python
from ksapi.models.segment_span import SegmentSpan

# TODO update the JSON string below
json = "{}"
# create an instance of SegmentSpan from a JSON string
segment_span_instance = SegmentSpan.from_json(json)
# print the JSON string representation of the object
print(SegmentSpan.to_json())

# convert the object into a dict
segment_span_dict = segment_span_instance.to_dict()
# create an instance of SegmentSpan from a dict
segment_span_from_dict = SegmentSpan.from_dict(segment_span_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


