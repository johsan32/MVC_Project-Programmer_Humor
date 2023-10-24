import React, { useEffect, useState } from "react";
import ListPostsView from "./ListPostsView";
import axios from "axios";

const ListPostsController = () => {
  const [data, setData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:2023/posts").then((res) => {
      const sortedData = res.data.sort((a, b) => {
        const dateA = new Date(a.posted);
        const dateB = new Date(b.posted);
        return dateB - dateA;
      });

      setData(sortedData);
    });
  }, []);

  return (
    <ListPostsView
      data={data}
      showPopup={showPopup}
      setShowPopup={setShowPopup}
      userName={userName}
      setUserName={setUserName}
    />
  );
};

export default ListPostsController;
