import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "set-parameter", changeState: "profile" });
  });
  const profile = useSelector((state) => state.ProfileScreenReducer);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div>
      <div
        className="position-relative"
        style={{ width: "100%", height: "200px" }}
      >
        <img
          src={profile.bannerPicture}
          height="100%"
          width="100%"
          alt={profile.lastName}
        />

        <div
          className="rounded-circle position-absolute top-100 translate-middle"
          style={{ height: "53%", width: "17%", left: "15%" }}
        >
          <img
            className="rounded-circle"
            style={{ border: "2px solid #000000" }}
            src={profile.profilePicture}
            height="100%"
            width="100%"
            alt={profile.lastName}
          />
        </div>
      </div>
      <div className="py-4">
        <Link to="/tuiter/edit-profile">
          <button
            className="btn btn-secondary float-end rounded-pill"
            style={{ backgroundColor: "transparent" }}
          >
            Edit Profile
          </button>
        </Link>
      </div>
      <div className="p-2">
        <h3 className="mb-0">
          {profile.firstName} {profile.lastName}
        </h3>
        <p style={{ color: "rgb(63,70,70)" }}>@{profile.handle}</p>
        <p>{profile.bio}</p>
        <div style={{ color: "rgb(63,70,70)" }}>
          <i className="fa fa-map-marker"></i>
          <span className="me-3">{" " + profile.location}</span>
          <i className="fa fa-birthday-cake"></i>
          <span className="me-3">
            {" Born " +
              new Date(profile.dateOfBirth + " 4:00:00").toLocaleDateString(
                undefined,
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
          </span>
          <i className="fa fa-calendar"></i>
          <span className="me-3">
            {" Joined " +
              months[parseInt(profile.dateJoined.split("/")[0]) - 1] +
              ", " +
              profile.dateJoined.split("/")[1]}
          </span>
        </div>
        <div>
          {profile.followingCount + "  "}
          <span className="me-3" style={{ color: "rgb(63,70,70)" }}>
            Following
          </span>
          {profile.followersCount + "  "}
          <span className="me-3" style={{ color: "rgb(63,70,70)" }}>
            Followers
          </span>
        </div>
      </div>
    </div>
  );
};
export default ProfileScreen;
