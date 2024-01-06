import { Search } from "@mui/icons-material";
import "./topbar.css";

export default function Topbar() {
  return (
    <div>
      <div className="topbarContainer">
        {/* Topbar Left */}
        <div className="topbarLeft">
          <i className="fa-brands fa-facebook"></i>
          <div className="topbarSearch">
            <Search />
            <input
              type="text"
              placeholder="Search Facebook"
              className="topbarSearchInput"
            />
          </div>
        </div>
        {/* Topbar Center */}
        <div className="topbarCenter">
          <i className="fa-solid fa-house"></i>
          <i className="fa-solid fa-tv"></i>
          <i className="fa-solid fa-store"></i>
          <i className="fa-solid fa-users"></i>
          <i className="fa-solid fa-gamepad"></i>
        </div>

        {/* Topbar Right */}
        <div className="topbarRight">
          <div className="topbarIcons">
            <i className="fa-solid fa-bars"></i>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIcons">
            <i className="fa-brands fa-facebook-messenger"></i>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIcons">
            <i className="fa-solid fa-bell"></i>
            <span className="topbarIconBadge">1</span>
          </div>
            <div className="profileImage">
            <img src="/assets/person/2.jpg" alt="User" />
            </div>
        </div>
      </div>
    </div>
  );
}
