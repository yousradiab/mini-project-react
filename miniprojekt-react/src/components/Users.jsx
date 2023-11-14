import React, { useState, useEffect } from "react";
import Table from "./Table.jsx";

export default function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch("http://localhost:5003/users");
        const data = await res.json();
        setData(data);
        console.log(data);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <Table data={data} />;
}
