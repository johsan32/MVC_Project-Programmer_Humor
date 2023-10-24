import React from "react";
import PopupController from "../../components/PopupController";

const ListPostsView = ({
  data,
  showPopup,
  setShowPopup,
  userName,
  setUserName,
}) => {
  return (
    <div className="main">
      <div className="sidebar">
        <img src="./images/sidebar.png" alt="" />
      </div>
      <div className="container">
        {!data && <p className="load">Loading...</p>}
        {data?.map((post) => (
          <div key={post.id}>
            <div className="post">
              <div className="info">
                <div className="head">
                  <div className="avatar">
                    <img
                      src={post.avatar ? post.avatar : post.avatarUrl}
                      alt=""
                    />
                    <h5
                      onClick={() => {
                        setUserName(post.name);
                        setShowPopup(true);
                      }}
                    >
                      @{post.name}
                    </h5>
                  </div>
                  <p>{post.title}</p>
                  <div className="title">
                    <span className="date">{post?.posted.slice(0, 10)}</span>
                    <span className="badge">#{post?.source}</span>
                  </div>
                </div>
                <div className="img-div">
                  <img
                    src={post.mediaImg ? post.mediaImg : post.media}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        {showPopup && (
          <PopupController setShowPopup={setShowPopup} userName={userName} />
        )}
      </div>
    </div>
  );
};

export default ListPostsView;
