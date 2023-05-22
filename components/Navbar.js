import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <ul style={{ display: "flex" }}>
        <li
          style={{
            padding: "8px 20px",
            backgroundColor: "lawngreen",
            margin: "5px 10px",
            color: "whitesmoke",
          }}
        >
          <Link href={"/Hi"}>Hi</Link>
        </li>
        <li
          style={{
            padding: "8px 20px",
            backgroundColor: "lawngreen",
            margin: "5px 10px",
            color: "whitesmoke",
          }}
        >
          <Link href={"/HiStatic"}>HiStatic</Link>
        </li>
        <li
          style={{
            padding: "8px 20px",
            backgroundColor: "lawngreen",
            margin: "5px 10px",
            color: "whitesmoke",
          }}
        >
          <Link href={"/blog"}>blog</Link>
        </li>
        <li
          style={{
            padding: "8px 20px",
            backgroundColor: "lawngreen",
            margin: "5px 10px",
            color: "whitesmoke",
          }}
        >
          <Link href={"/UseEffect"}>UseEffect</Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar