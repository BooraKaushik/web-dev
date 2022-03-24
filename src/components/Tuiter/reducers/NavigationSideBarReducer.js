const NavigationSidebarReducer = (state = "home", action) => {
  switch (action.type) {
    case "set-parameter":
      return action.changeState;
    default:
      return "home";
  }
};
export default NavigationSidebarReducer;
