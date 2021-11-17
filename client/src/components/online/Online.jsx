import "./Online.css";

export default function Online({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <li className="RightbarFriend">
            <div className="RightbarProfileImgContainer">
                <img className="RightbarProfileImg" src={PF + user.profilePicture} alt="" />
                <span className="RightbarOnline"></span>
            </div>
            <span className="RightbarUsername" >{user.username}</span>
        </li>
    )
}