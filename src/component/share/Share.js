import {
  AddReaction,
  Camera,
  Photo,
  PhotoLibrary,
  Videocam,
} from "@mui/icons-material";
import "./share.css";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="thoughts">
          <img
            src="/assets/person/3.jpg"
            alt="image"
            className="profileImage"
          />
          <span className="text">What's on your mind, Abhishek ?</span>
        </div>
        <hr className="shareHr" />

        <div className="shareItems">
          <div className="shareListItem">
            <Videocam className="shareIcon liveVideo" />
            <span className="shareListText">Live Video</span>
          </div>

          <div className="shareListItem">
            <PhotoLibrary className="shareIcon photo" />
            <span className="shareListText">Photo/Video</span>
          </div>

          <div className="shareListItem">
            <AddReaction className="shareIcon  feeling" />
            <span className="shareListText">Feelings/Activity</span>
          </div>
        </div>
      </div>
    </div>
  );
}
