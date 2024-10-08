import {Col, Container, Row} from "react-bootstrap";
import {CategoryBar} from "../Component/Category/CategoryBar.tsx";
import {Video} from "../Component/Video/video.tsx";
import axios from "axios";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../redux/store.ts";
// import {getVideosByKeyword , getyoutubeVideos} from "../redux/videoSlice.ts";
import InfiniteScroll from "react-infinite-scroll-component";
import {SkeletonVideo} from "../Component/Skeleton/SkeletonVideo.tsx";
import {getyoutubeVideosThunk, getVideosByKeywordThunk} from "../redux/videoSlice.ts";

export function HomeScreen() {

    const dispatch = useAppDispatch()

    // useEffect(()=>{
    //     axios.get("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCNLCghPaaEOQ6sRTIcU5MUnAWCbEEufBQ&chart=mostPopular&part=player&maxResults=50")
    //         .then((res)=>setVideo(res.data.items))
    // },[])

    // useEffect(()=>{
    //     axios.get("https://www.googleapis.com/youtube/v3/videoCategories?key=AIzaSyCNLCghPaaEOQ6sRTIcU5MUnAWCbEEufBQ&part=snippet&regionCode=IN")
    //         .then((res)=>setVideo(res.data.items))
    // },[])

    // console.log(video)

    // for (const key1 in video) {
    //     if (video.hasOwnProperty(key1)) {
    //         const innerObject = video[key1];
    //         for (const key2 in innerObject) {
    //             if(key2=="snippet"){
    //                 const inInnerObject = innerObject[key2]
    //                 for (const key3 in inInnerObject){
    //                     if(key3=="title")  console.log(key3, inInnerObject[key3]);
    //                 }
    //             }
    //             // if (innerObject.hasOwnProperty(key2)) {
    //             //     console.log(key1, key2, innerObject[key2]);
    //             // }
    //         }
    //     }
    // }

    const {videos, activeCategory, loading, nextPageToken} = useAppSelector((state) => state.homeVideos)

    const category = sessionStorage.getItem("keyword")
    // const[homeVideos, setHomeVideos] = useState([])

    const fetData = () => {
        console.log("Getting videos")
        if (!activeCategory || activeCategory === 'All') {
            dispatch(getyoutubeVideosThunk())
        } else {
            console.log(JSON.parse(category))
            dispatch(getVideosByKeywordThunk({keyword: JSON.parse(category)}))
        }

    }

    useEffect(() => {
        fetData()
        // getyoutubeVideos().then(()=>{})
    }, []);

    return (
        <Container style={{height: "90vh"}} className="overflow-y-scroll">
            <CategoryBar/>
            <InfiniteScroll
                next={fetData}
                hasMore={!!nextPageToken}
                loader={
                    <div className="spinner-border text-danger d-block mx-auto"></div>
                }
                dataLength={videos.length}
                className="row"
            >

                <VideoGrid videos={videos}/>

                <ShimmerGrid count={20}/>


            </InfiniteScroll>

            {/*<div className="border border-primary w-100 m-0">HomeScreen</div>*/}
        </Container>
    )
}

const VideoGrid = ({videos}: { videos: any[]}) => {
    return (
        videos.map (item => (
            <Col lg={3} md={4}>
                <Video item={item} key={item.id}/>
            </Col>
        ))
    );
}

const ShimmerGrid = (count: { count: number}) => {
    return (
        [...Array(count)].map(() => (
            <Col lg={3} md={4}>
                <SkeletonVideo/>
            </Col>
        ))
    );
}