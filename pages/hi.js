import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

const hi = (props) => {
  console.log("props", props);
  const [data, setdata] = useState(props.allBlogs);
  if (!data) {
    return <div>
      Loading...
    </div>
  }
  return (
    <div>
      <h1 style={{textAlign:"center"}}>I Am Hi</h1>
      <ul>
        {data?.map((d) => (
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
export async function getServerSideProps(context) {
  try {
   
   const res2 = await axios.get(`${process.env.SERVER_URL}/blog/get`);

   const data2 = await res2.data;
   
   return {
     props: {
       allBlogs: data2,
     },
    };
   
 } catch (error) {
  console.error("Error fetching data:", error);
  return {
    props: { initialData: {} },
  };
 }
}

export default hi;
