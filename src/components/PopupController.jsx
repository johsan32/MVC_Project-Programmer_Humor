import axios from "axios";
import PopupView from "./PopupView";
import { useEffect, useState } from "react";

const PopupController = ({ userName, setShowPopup }) => {
  const [data, setData] = useState(null);
  const [avatarData, setAvatarData] = useState("");
  console.log(userName);
  useEffect(() => {
    axios
      .get(`http://localhost:2023/posts?name=${userName}`)
      .then((res) => setData(res.data));
  }, []);
  useEffect(() => {
    if (data) {
      const imgAvatar = data.find((user) => userName === user.name);
      if (imgAvatar) {
        setAvatarData(imgAvatar);
      }
    }
  }, [data, userName]);

  console.log("avatar", avatarData);

  return (
    <PopupView
      userName={userName}
      data={data}
      setShowPopup={setShowPopup}
      avatarData={avatarData}
    />
  );
};

export default PopupController;
