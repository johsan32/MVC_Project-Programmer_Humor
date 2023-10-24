import { useState } from "react";
import AddPostView from "./AddPostView";
import AddPostModel from "./AddPostModel";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPostController = () => {
  const navigate = useNavigate();

  const model = new AddPostModel();
  const [form, setForm] = useState(model.state);
  const onInputChange = (label, value) => {
    const copyState = { ...form };
    copyState[label] = value;
    setForm(copyState);
  };
  const onFileChange = (label, files) => {
    console.log(label, files[0].name);
    const copyState = { ...form };
    copyState[label] = `./images/${files[0].name}`;
    setForm(copyState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.title || !form.source) {
      alert("Please fill in the required fields");
      return;
    }
    axios.post("http://localhost:2023/posts", form).then(() => navigate("/"));
  };

  return (
    <AddPostView
      onInputChange={onInputChange}
      onFileChange={onFileChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default AddPostController;
