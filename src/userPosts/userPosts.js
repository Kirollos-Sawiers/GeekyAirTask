import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Toast } from "react-bootstrap";
import axiosInstance from "../axiosConfig/instance";

const UserPosts = () => {
  const params = useParams();
  const [posts, setposts] = useState([]);
  useEffect(() => {
    axiosInstance
      .get(`posts?userId=${params.id}`)
      .then((res) => {
        console.log(res.data);
        setposts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
		<div className="container mt-5">
				{posts.map((post) => {
					return (
					<Toast className="m-2" style={{ width:"50rem" }}>
        <Toast.Header className="bg-dark" closeButton={false}>
          <strong className="text-light">{post.title}</strong>
        </Toast.Header>
        <Toast.Body>{post.body}</Toast.Body>
      </Toast>)
		})}
			</div>
    </>
  );
};

export default UserPosts;
