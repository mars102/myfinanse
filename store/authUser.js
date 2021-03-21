export const state = () => ({
  authUser: null,
})
export const mutations = {
    ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
      // Do this:
      state.authUser = {
          uid: authUser.uid,
          email: authUser.email
        }
    }
}

export const actions = {
  onAuthStateChangedAction: (ctx, { authUser, claims }) => {
    if (!authUser) {
      // claims = null
      // Perform logout operations
    } else {
      // Do something with the authUser and the claims object...
    }
  }
}
