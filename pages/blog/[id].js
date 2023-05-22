// Import necessary modules
import axios from "axios";
import Link from "next/link";
import React from "react";

// Define your component
const Hi = (props) => {
  console.log(props)
  return (
    <div>
      <Link href={"/hi"}>Back</Link>
      <ul>
        <p>{props.blogDetail.title}</p>
        <p>{props.blogDetail.content}</p>
        <p>{props.blogDetail._id}</p>
        <p>{props.blogDetail.createdAt}</p>
      </ul>
    </div>
  );
};

// Define getStaticPaths function
export async function getStaticPaths() {
  const res = await axios.get(`${process.env.SERVER_URL}/blog/get`);

  const data = await res.data;

  const paths = data.map((item) => {
    return {
      params: {
        id: item._id.toString(), // Ensure the id is converted to a string
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
}

// Define getStaticProps function
export async function getStaticProps(context) {
  console.log("context",context)
  const { params } = context;
  const id = params.id; // Access the id parameter

  // Fetch the data for the specific blog using the id
  const res = await axios.get(`${process.env.SERVER_URL}/blog/getsingle/${id}`);
  const res2 = await axios.get(`${process.env.SERVER_URL}/blog/get`);

  const data = await res.data;
  const data2 = await res2.data;

  return {
    props: {
      blogDetail: data,
      otherBlogs: data2,
    },
    revalidate: 10,
  };
}

export default Hi;
