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
          <div className="card-text " style={{ margin: "12% 45%" }}>
            <i className="fa fa-camera"></i>
            <i className="fa fa-times ms-4"></i>
          </div>
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
        <div className="form-floating my-3">
          <input
            className="form-control"
            id="fName"
            type="text"
            style={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid grey",
            }}
            onChange={(event) =>
              updateData({ ...data, firstName: event.target.value })
            }
            value={data.firstName}
          />
          <label for="fName">First Name</label>
        </div>
        <div className="form-floating my-3">
          <input
            className="form-control"
            id="lName"
            type="text"
            style={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid grey",
            }}
            onChange={(event) => {
              updateData({ ...data, lastName: event.target.value });
            }}
            value={data.lastName}
          />
          <label for="lName">Last Name</label>
        </div>
        <div className="form-floating my-3">
          <textarea
            className="form-control"
            id="bio"
            style={{
              backgroundColor: "black",
              height: "10%",
              color: "white",
              border: "1px solid grey",
            }}
            onChange={(event) =>
              updateData({ ...data, bio: event.target.value })
            }
            defaultValue={data.bio}
          ></textarea>

          <label for="bio">Bio</label>
        </div>
        <div className="form-floating my-3">
          <input
            className="form-control"
            id="location"
            type="text"
            style={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid grey",
            }}
            onChange={(event) =>
              updateData({ ...data, location: event.target.value })
            }
            value={data.location}
          />
          <label for="location">Location</label>
        </div>
        <div className="form-floating my-3">
          <input
            className="form-control"
            id="site"
            type="url"
            style={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid grey",
            }}
            onChange={(event) =>
              updateData({ ...data, website: event.target.value })
            }
            value={data.website}
          />
          <label for="site">Website</label>
        </div>
        <div className="form-floating my-3">
          <input
            className="form-control"
            id="dob"
            type="date"
            style={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid grey",
            }}
            onChange={(event) =>
              updateData({ ...data, dateOfBirth: event.target.value })
            }
            value={new Date(data.dateOfBirth).toISOString().split("T")[0]}
          />
          <label for="dob">Date of Birth</label>
        </div>
      </div>
    </div>
  );
};
export default EditProfile;
