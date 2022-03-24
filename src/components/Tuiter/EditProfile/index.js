import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

const EditProfile = () => {
  const profile = useSelector((state) => state.ProfileScreenReducer);
  const [data, updateData] = useState(profile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "set-parameter", changeState: "profile" });
  });
  return (
    <div>
      <div>
        <Link to="/tuiter/profile">
          <i
            style={{ fontSize: "20px" }}
            className="mx-2 mt-2 text-white fa fa-times"
          ></i>
        </Link>

        <h5 className="mx-3 d-inline">Edit Profile</h5>
        <Link to="/tuiter/profile">
          <button
            className="btn btn-secondary mb-1 float-end rounded-pill"
            onClick={() => {
              dispatch({ type: "EditProfile", profile: data });
              <Navigate to="/tuiter/profile"></Navigate>;
            }}
          >
            Save
          </button>
        </Link>
      </div>
      <div
        className="card bg-dark text-white position-relative"
        style={{ width: "100%", height: "200px" }}
      >
        <img
          className="card-img"
          src={data.bannerPicture}
          height="100%"
          width="100%"
          alt={data.lastName}
        />

        <div className="card-img-overlay">
          <i
            className="card-text fa fa-camera"
            style={{ margin: "12% 50%" }}
          ></i>
        </div>

        <div
          className="card bg-dark text-white rounded-circle position-absolute top-100 translate-middle"
          style={{ height: "53%", width: "17%", left: "15%" }}
        >
          <img
            className="card-img rounded-circle"
            style={{ border: "2px solid #000000" }}
            src={data.profilePicture}
            height="100%"
            width="100%"
            alt={data.lastName}
          />
          <div className="card-img-overlay">
            <i className="card-text fa fa-camera" style={{ margin: "40%" }}></i>
          </div>
        </div>
      </div>
      <div className="py-4"></div>

      <div className="p-2">
        <div className="form-group">
          <label for="fName">First Name</label>
          <input
            className="form-control"
            id="fName"
            type="text"
            onChange={(event) =>
              updateData({ ...data, firstName: event.target.value })
            }
            value={data.firstName}
          />
        </div>
        <div className="form-group">
          <label for="lName">Last Name</label>
          <input
            className="form-control"
            id="lName"
            type="text"
            onChange={(event) => {
              updateData({ ...data, lastName: event.target.value });
            }}
            value={data.lastName}
          />
        </div>
        <div className="form-group">
          <label for="bio">Bio</label>
          <textarea
            className="form-control"
            id="bio"
            onChange={(event) =>
              updateData({ ...data, bio: event.target.value })
            }
            defaultValue={data.bio}
          ></textarea>
        </div>
        <div className="form-group">
          <label for="location">Location</label>
          <input
            className="form-control"
            id="location"
            type="text"
            onChange={(event) =>
              updateData({ ...data, location: event.target.value })
            }
            value={data.location}
          />
        </div>
        <div className="form-group">
          <label for="site">Website</label>
          <input
            className="form-control"
            id="site"
            type="url"
            onChange={(event) =>
              updateData({ ...data, website: event.target.value })
            }
            value={data.website}
          />
        </div>
        <div className="form-group">
          <label for="dob">Date of Birth</label>
          <input
            className="form-control"
            id="dob"
            type="date"
            onChange={(event) =>
              updateData({ ...data, dateOfBirth: event.target.value })
            }
            value={new Date(data.dateOfBirth).toISOString().split("T")[0]}
          />
        </div>
      </div>
    </div>
  );
};
export default EditProfile;
