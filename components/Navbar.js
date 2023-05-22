import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
          <ul style={ {display:"flex"}}>
        <li style={{padding:"8px 20px",backgroundColor:"lawngreen",margin:"5px 10px",color:"whitesmoke"}}>
          <Link href={"/hi"}>hi</Link>
        </li>
        <li style={{padding:"8px 20px",backgroundColor:"lawngreen",margin:"5px 10px",color:"whitesmoke"}}>
          <Link href={"/hiStatic"}>hiStatic</Link>
        </li>
        <li style={{padding:"8px 20px",backgroundColor:"lawngreen",margin:"5px 10px",color:"whitesmoke"}}>
          <Link href={"/blog"}>blog</Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar