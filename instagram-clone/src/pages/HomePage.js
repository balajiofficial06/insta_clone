import { styled } from "@mui/material";
import Post from "../components/Post";
import samplePost from "../data/samplePost";

const HomepageWrapper = styled('div')(({ theme }) => ({
  display: "flex",
  height: "100vh",
  flexDirection: "column",
  gap: "30px"
}))


export default function HomePage() {
  return (
    <HomepageWrapper>
      <h1>Home page</h1>
      <Post post={samplePost} />
    </HomepageWrapper>
  );
}
