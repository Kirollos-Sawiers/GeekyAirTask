import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../axiosConfig/instance";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function UsersData() {
  const [users, setUsers] = useState([]);
  const [website, setWebsite] = useState();
  useEffect(() => {
    axiosInstance
      .get("users", {})
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="container mt-5">
        <div className="row ">
          {users.map((user) => {
            return (
              <Card
                className="m-1 p-0"
                style={{ width: "16rem" }}
                key={user.id}
              >
                <Card.Header className="text-center bg-dark">
                  <b className="text-light">{user.name}</b>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <b>User Name: </b>
                    {user.username}
                  </Card.Text>
                  <Card.Text>
                    <b>E-mail: </b>
                    {user.email}
                  </Card.Text>
                  <b>Address: </b>
                  <Card.Text className="ms-3">
                    <b>Street / </b> {user.address.street}
                  </Card.Text>
                  <Card.Text className="ms-3">
                    <b>City / </b> {user.address.city}
                  </Card.Text>
                  <b>Phone No. : </b>
                  <Card.Text className="ms-3">{user.phone}</Card.Text>
                  <b>Website: </b>
                  <a href={`${user.website}`} target="_blank">
                    <Card.Text>{user.website}</Card.Text>
                  </a>
                  <Card.Text>
                    <b>Company: </b>
                    {user.company.name}
                  </Card.Text>
                  <div className="d-flex justify-content-center  ">
                    <Link to={`/userPosts/${user.id}`}>
                      <Button variant="outline-dark">Posts</Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
