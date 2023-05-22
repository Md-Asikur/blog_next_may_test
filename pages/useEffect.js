import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const MyComponent = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
        try {
          setLoading(true)
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/blog/get`
        );
        const data = await response.data;
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data?.map((d, i) => (
        <ul key={i}>
          <h1>{d.title}</h1>
          <p>{d.content}</p>
          <Link href={`/blog/${d._id}`}>{d.title}</Link>
        </ul>
      ))}
    </div>
  );
};

export default MyComponent;
