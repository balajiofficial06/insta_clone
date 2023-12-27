import { Avatar, IconButton, TextField, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubble";
import SendIcon from "@mui/icons-material/Send";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

export default function Post({ post }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #ccc",
        borderRadius: "1rem",
        margin: "1rem",
        width: "500px",
      }}
    >
      <PostHeader post={post} />
      <PostBody post={post} />
      <PostFooter post={post} />
    </div>
  );
}

function PostHeader({ post }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "1rem",
        gap: "1rem",
      }}
    >
      <Avatar src={post.userImg} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexGrow: 1,
        }}
      >
        <Typography>
          {post.username} : <span>{post.time}</span>
        </Typography>
        <span>{post.location}</span>
      </div>
      <IconButton>
        <MoreHorizIcon />
      </IconButton>
    </div>
  );
}

function PostBody({ post }) {
  return (
    <div>
      <img
        src={post.postMedia}
        alt=""
        style={{
          width: "100%",
        }}
      />
    </div>
  );
}

function PostFooter({ post }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: ".25rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: ".5rem",
            flexGrow: 1,
          }}
        >
          <IconButton>
            <FavoriteIcon />
          </IconButton>
          <IconButton>
            <ChatBubbleOutlineIcon />
          </IconButton>
          <IconButton>
            <SendIcon />
          </IconButton>
        </div>
        <IconButton>
          <BookmarkBorderIcon />
        </IconButton>
      </div>
      <Typography
        style={{
          padding: "0rem .5rem",
        }}
      >
        {post.likes} likes
      </Typography>
      <Typography
        style={{
          padding: "0rem .5rem",
          textAlign: "start"
        }}
      >
        {post.username}.{post.caption}
      </Typography>

      <Typography
        style={{
          padding: "0rem .5rem",
          textAlign: "start"
        }}
      >
        View all {post.comments} comments.
      </Typography>
     
      <TextField fullWidth variant="standard" placeholder="Add a comment..." style={{
        padding: "0rem .5rem",
        marginBottom: "1rem"
      }}/>
    </div>
  );
}
