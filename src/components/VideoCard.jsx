/* eslint-disable react/prop-types */
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";


const VideoCard = ({video:{id:{videoId}, snippet}}) => {
    
  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: '20px' }}>
    <Link to={videoId ?`/video/${videoId}` : demoVideoUrl}>
    <CardMedia  image={snippet?.thumbnails?.high?.url} 
    alt={snippet?.title} sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }}/>
    </Link>

    <CardContent sx={{ backgroundColor: "#1E1E1E", height: '95px' }}>
    <Link to={snippet?.videolId?`/video/${videoId}` : demoVideoUrl}>
    <Typography variant="subtitle1" fontWeight="bold" color="#FFF" >
    {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
    </Typography>
    </Link>
    <Link to={snippet?.channelId?`/channel/${snippet?.channelId}` : demoChannelUrl}>
    <Typography variant="subtitle2" fontWeight="bold" mt='15px' color="gray" >
    {snippet?.channelTitle || demoChannelTitle}
    <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
    </Typography>
    </Link>
    </CardContent>
   
   </Card>
  )
}

export default VideoCard