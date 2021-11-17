import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

export default function Rightbar({ profile }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
                    </span>
                </div>
                <img className="RightbarAd" src="/assets/ad.png" alt="" />
                <h4 className="RightbarTitle">Online Friends</h4>
                <ul className="RightbarFriendList">
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="RightbarTitle">User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <div className="rightbarInfoKey">City:</div>
                        <div className="rightbarInfoValue">New York</div>
                    </div>
                    <div className="rightbarInfoItem">
                        <div className="rightbarInfoKey">From:</div>
                        <div className="rightbarInfoValue">Madrid</div>
                    </div>
                    <div className="rightbarInfoItem">
                        <div className="rightbarInfoKey">Relationship:</div>
                        <div className="rightbarInfoValue">Single</div>
                    </div>
                    <h4 className="RightbarTitle">User Friends</h4>
                    <div className="RightbarFolowings">
                        <div className="RightbarFollowing">
                            <img src={`${PF}person/1.jpeg`} alt="" className="RightbarFollowingImg" />
                            <div className="span RightbarFollowingName">Thomas Holden</div>
                        </div>
                        <div className="RightbarFollowing">
                            <img src={`${PF}person/2.jpeg`} alt="" className="RightbarFollowingImg" />
                            <div className="span RightbarFollowingName">Thomas Holden</div>
                        </div>
                        <div className="RightbarFollowing">
                            <img src={`${PF}person/3.jpeg`} alt="" className="RightbarFollowingImg" />
                            <div className="span RightbarFollowingName">Thomas Holden</div>
                        </div>
                        <div className="RightbarFollowing">
                            <img src={`${PF}person/4.jpeg`} alt="" className="RightbarFollowingImg" />
                            <div className="span RightbarFollowingName">Thomas Holden</div>
                        </div>
                        <div className="RightbarFollowing">
                            <img src={`${PF}person/5.jpeg`} alt="" className="RightbarFollowingImg" />
                            <div className="span RightbarFollowingName">Thomas Holden</div>
                        </div>
                        <div className="RightbarFollowing">
                            <img src={`${PF}person/6.jpeg`} alt="" className="RightbarFollowingImg" />
                            <div className="span RightbarFollowingName">Thomas Holden</div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="Rightbar">
            <div className="RightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}