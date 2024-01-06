import React from 'react';
import "./sidebar.css"
import { Bookmarks, Chat, EventAvailable, Groups,
  HelpOutline, PlayCircle, RssFeed, School, Work } from '@mui/icons-material';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        {/* List of content */}
        <ul className='sidebarList'>
          <li className="sidebarListItem">
            <RssFeed className='sidebarIcon'/>
            <span>Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className='sidebarIcon'/>
            <span>Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircle className='sidebarIcon'/>
            <span>Video</span>
          </li>
          <li className="sidebarListItem">
            <Groups className='sidebarIcon'/>
            <span>Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmarks className='sidebarIcon'/>
            <span>Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className='sidebarIcon'/>
            <span>Questions</span>
          </li>
          <li className="sidebarListItem">
            <Work className='sidebarIcon'/>
            <span>Jobs</span>
          </li>
          <li className="sidebarListItem">
            <EventAvailable className='sidebarIcon'/>
            <span>Events</span>
          </li>
          <li className="sidebarListItem">
            <School className = 'sidebarIcon'/>
            <span>Courses</span>
          </li>
        </ul>
        {/* Friend List */}
        <button className='sidebarShowMore'>Show More</button>
        <hr className='sidebarHr'/>
        <ul className='sidebarFriendlist'>
          {/* Friends Name and icon */}
          <li className="sidebarFriend">
            <img src="/assets/Person/2.jpg" alt="Friend" className="sidebarFriendImage" />
            <span className="sidebarFriendName">Abhishek Verma</span>
          </li>

          {/* Friends Name and icon */}
          <li className="sidebarFriend">
            <img src="/assets/Person/2.jpg" alt="Friend" className="sidebarFriendImage" />
            <span className="sidebarFriendName">Abhishek Verma</span>
          </li>

          {/* Friends Name and icon */}
          <li className="sidebarFriend">
            <img src="/assets/Person/2.jpg" alt="Friend" className="sidebarFriendImage" />
            <span className="sidebarFriendName">Abhishek Verma</span>
          </li>

          {/* Friends Name and icon */}
          <li className="sidebarFriend">
            <img src="/assets/Person/2.jpg" alt="Friend" className="sidebarFriendImage" />
            <span className="sidebarFriendName">Abhishek Verma</span>
          </li>

          {/* Friends Name and icon */}
          <li className="sidebarFriend">
            <img src="/assets/Person/2.jpg" alt="Friend" className="sidebarFriendImage" />
            <span className="sidebarFriendName">Abhishek Verma</span>
          </li>

          {/* Friends Name and icon */}
          <li className="sidebarFriend">
            <img src="/assets/Person/2.jpg" alt="Friend" className="sidebarFriendImage" />
            <span className="sidebarFriendName">Abhishek Verma</span>
          </li>

          {/* Friends Name and icon */}
          <li className="sidebarFriend">
            <img src="/assets/Person/2.jpg" alt="Friend" className="sidebarFriendImage" />
            <span className="sidebarFriendName">Abhishek Verma</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
