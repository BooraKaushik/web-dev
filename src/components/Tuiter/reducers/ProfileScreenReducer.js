import profile from "../ProfileScreen/profile.json";
const profileData = (state = profile, action) => {
  switch (action.type) {
    case "EditProfile":
      const newProfile = { ...state, ...action.profile };
      console.log(newProfile);
      return newProfile;
    default:
      return state;
  }
};
export default profileData;
