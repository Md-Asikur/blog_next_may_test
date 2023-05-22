import Details from "@/components/blog/Details";
import axios from "axios";
import Link from "next/link";
import React from "react";

const Hi = (props) => {
  console.log("props", props);

  return (
    <div>
          <Details blogDetail={props.blogDetail} />
    </div>
  );
};
// Define getStaticProps function
export async function getServerSideProps(context) {
  const res2 = await axios.get(`${process.env.SERVER_URL}/blog/getsingle/${context.params.id}`);

  const data2 = await res2.data;

  return {
    props: {
      blogDetail: data2,
    },
  };
}

export default Hi;
