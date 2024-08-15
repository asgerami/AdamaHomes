import { useNavigate } from 'react-router-dom';
import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";

function ProfilePage() {
  const navigate = useNavigate(); // React Router v6

  const handleUpdateProfileClick = () => {
    navigate('/profileupdate');
  };

  const handleCreateNewPostClick = () => {
    navigate('/newpost');
  };

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button onClick={handleUpdateProfileClick}>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src="/profile.png" alt="Avatar" />
            </span>
            <span>
              Full Name: <b>Abebe Beso</b>
            </span>
            <span>
              Username: <b>abebe</b>
            </span>
            <span>
              E-mail: <b>abebeB@gmail.com</b>
            </span>
            <span>
              Phone Number: <b>0911111111</b>
            </span>
            <span>
              Address: <b>Kebele 01, Adama</b>
            </span>
          </div>
          <div className="title">
            <h1>My Listings</h1>
            <button onClick={handleCreateNewPostClick}>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
