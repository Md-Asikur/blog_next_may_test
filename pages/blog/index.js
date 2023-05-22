import axios from "axios";
import Link from "next/link";
import React from "react";

const index = (props) => {
  console.log("props", props);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>I Am Blog</h1>
      <ul>
        {props.allBlogs.map((d) => (
          <div key={d._id}>
            <p>{d._id}</p>
            <li>{d.title}</li>
            <h3>{d.content}</h3>
            <Link href={`/blog/${d._id}`}>{d.title}</Link>
          </div>
        ))}
      </ul>
    </div>
  );
};
// Define getStaticProps function
export async function getStaticProps(context) {
  ;
  const res2 = await axios.get(`${process.env.SERVER_URL}/blog/get`);

  
  const data2 = await res2.data;

  return {
    props: {
     
      allBlogs: data2,
    },
    
  };
}

export default index;
