const React = require("react");
const Def = require("../default");

function signUp() {
  return (
    <Def>
      <main>
        <h1>Sign up here</h1>
        <form method="POST" action="/users">
          <div className="form-group col-sm-6">
            <label htmlFor="name">Email</label>
            <input className="form-control" id="name" name="name" required />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="type">Password</label>
            <input
              className="form-control"
              id="description"
              name="description"
              required
            />
          </div>
          <input className="btn btn-primary" type="submit" value="Sign Up" />
        </form>
      </main>
    </Def>
  );
}

module.exports = signUp;
