import "./home.css";
import Topbar from "../../component/topbar/Topbar";
import Sidebar from "../../component/sidebar/Sidebar";

import Rightbar from "../../component/rightbar/Rightbar";
// import Feed from "../../component/feed/Feed";
import Feed from "../../component/feed/Feed";

export default function Home() {
  return (
    <div>
      <Topbar />
      <div className="homeContainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </div>
    </div>
  );
}
