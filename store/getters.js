export default {
  isLoggedIn: (state) => {
    try {
        console.log(state.authUser);
        var parsedobj = JSON.parse(JSON.stringify(state.authUser))
        console.log(parsedobj)
      console.log(parsedobj.authUser !== null);
      console.log("Привет мир!");

      return parsedobj.authUser !== null
    } catch {
        console.log("На выход!");
      return false
    }
  }
}
