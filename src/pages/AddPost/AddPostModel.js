import { v4 } from "uuid";

class AddPostModel {
  state = {
    id: v4(),
    posted: new Date(),
    title: "",
    name: "",
    mediaImg: "",
    avatar: "",
    source: "",
  };
}

export default AddPostModel;
