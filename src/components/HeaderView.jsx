import { NavLink } from "react-router-dom";

const HeaderView = () => {
  return (
    <header>
      <div className="logo">
        <img src="./images/logo.png" alt="" />
        <h2>Programmer Humor</h2>
      </div>
      <div className="link">
        <NavLink to="/">Posts</NavLink>
        <NavLink to="/add-post">
          <label htmlFor="search">
            <input id="search" type="search" placeholder="search..." />
            <img src="./images/search.png" alt="" />
          </label>
          Add Post
        </NavLink>
      </div>
    </header>
  );
};

export default HeaderView;
