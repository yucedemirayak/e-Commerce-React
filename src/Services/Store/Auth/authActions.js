export const _logout = (state, action) => {
    state.token = undefined;
    state.role = undefined;
    window.history.pushState({}, "", "/");
  };