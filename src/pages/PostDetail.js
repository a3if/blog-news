import React, { useEffect, useState } from "react";
import { postDetailApi, categoryByid,userByid } from "../api/blogApi";
import { useParams, Link } from "react-router-dom";
import "./PostDetail.css";

const PostDetail = () => {
  const [post, setPost] = useState([]);
  const [categories ,setCategories]=useState()
  const [authorName,setAuthorName]=useState();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const postDetail = async () => {
        const data = await postDetailApi(id);
          const category = data.data.category;
          const user = data.data.author;
          setPost(data.data);

        const categoryName = await categoryByid(category);
        setCategories(categoryName.category.category_name)

        const users=await userByid(user);
        setAuthorName(users.data.user.username)
      };
      postDetail();
    }
  }, [id]);

  return (
    <div className="blog_info">
      <ul key={post._id}>
        <li>
          Title:<span>{post.title}</span>
        </li>
        <li>
          Description:<span>{post.description}</span>
        </li>
        <li>categories: <span>{categories}</span></li>
        <li>username: <span>{authorName}</span></li>
        <img src={post.post_img} alt="not found" className="recent-img" />
        <div className="button">
          <Link to="/">
            <button>Back</button>
          </Link>{" "}
        </div>
      </ul>
    </div>
  );
};

export default PostDetail;
