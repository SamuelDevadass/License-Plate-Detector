from fastapi import APIRouter, HTTPException
from fastapi.responses import StreamingResponse
from services import detection
import asyncio

router = APIRouter()

@router.get("/api/video")
async def live_video_streaming_feed():
        async def frame_streamer_generator():
            while True:
                frame_bytes = detection.get_live_frame()

                if frame_bytes:
                    yield (b'--frame\r\n'b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n')
                await asyncio.sleep(0.03)
        return StreamingResponse(frame_streamer_generator(), 
                                 media_type='multipart/x-mixed-replace; boundary=frame')