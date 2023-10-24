const AddPostView = ({ onInputChange, onFileChange, handleSubmit }) => {
  console.log(onInputChange);
  console.log(handleSubmit);
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Post</h2>
      <fieldset>
        <label>
          Username<span>(*)</span>
        </label>
        <input
          onChange={(e) => onInputChange("name", e.target.value)}
          type="text"
          placeholder="Write username"
        />
      </fieldset>
      <fieldset>
        <label>
          Blog Post<span>(*)</span>
        </label>
        <textarea
          onChange={(e) => onInputChange("title", e.target.value)}
          type="text"
          placeholder="Write something for the post..."
          maxLength={"100"}
        />
      </fieldset>
      <fieldset>
        <label>
          Tag Name<span>(*)</span>
        </label>
        <input
          onChange={(e) => onInputChange("source", e.target.value)}
          type="text"
          placeholder="example:coding, funny or something"
        />
      </fieldset>
      <div className="file">
        <fieldset>
          <label>Media File</label>
          <input
            onChange={(e) => onFileChange("mediaImg", e.target.files)}
            type="file"
          />
        </fieldset>
        <fieldset>
          <label>Avatar Image</label>
          <input
            onChange={(e) => onFileChange("avatar", e.target.files)}
            type="file"
          />
        </fieldset>
      </div>

      <button>Send</button>
    </form>
  );
};

export default AddPostView;
