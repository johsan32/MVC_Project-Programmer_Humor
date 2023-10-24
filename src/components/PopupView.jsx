const PopupView = ({ userName, setShowPopup, data, avatarData }) => {
  console.log(avatarData.avatarUrl);
  return (
    <div className="wrapper">
      <div className="popup">
        <div className="wrap">
          <div className="info-wrap">
            {avatarData.avatarUrl && <img src={avatarData.avatarUrl} alt="" />}
            {avatarData.avatar && <img src={avatarData.avatar} alt="" />}
            <h4>
              posts by <span>@{userName}</span>
            </h4>
          </div>
          <button onClick={() => setShowPopup(false)}> X </button>
        </div>
        {!data && <p>Looding...</p>}
        {data?.map((post) => (
          <div key={post.id} className="post">
            <div className="title">
              <p>{post.title}</p>
              <div className="title-end">
                <span className="date">{post?.posted.slice(0, 10)}</span>
                <span className="badge">#{post?.source}</span>
              </div>
            </div>
            <img src={post.mediaImg ? post.mediaImg : post.media} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopupView;
