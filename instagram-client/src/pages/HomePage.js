import { styled } from "@mui/material";
import Post from "../components/Post";
import samplePost from "../data/samplePost";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component"

import axios from "axios"



const HomepageWrapper = styled('div')(({ theme }) => ({
  display: "flex",
  height: "100vh",
  flexDirection: "column",
  gap: "30px"
}))





export default function HomePage() {
  const apiUrl = process.env.REACT_APP_API_URL

  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(1);


  useEffect(() => {

    // setItems(samplePost.slice(0, 2))
    axios
      .get(apiUrl + "?pageNumber=1")
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, [apiUrl]);


  const fetchMoreData = () => {

    // const newValue = samplePost.slice(index * 2, index * 2 + 2)
    // setItems(prev => [...prev, ...newValue])
    axios
      .get(apiUrl + `?pageNumber=${index + 1}`)
      .then((res) => {
        setItems((prevItems) => [...prevItems, ...res.data]);
        setIndex((prevIndex) => prevIndex + 1);
        res.data.length > 0 ? setHasMore(true) : setHasMore(false);
      })
      .catch((err) => console.log(err));

  };



  return (
    <HomepageWrapper>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
      >

        {items && items.map((item, index) => <Post post={item} key={index} />)}

      </InfiniteScroll>

    </HomepageWrapper>
  );
}
