const React = require("react");
const Def = require("../default");

function login() {
  return (
    <Def>
      <main>
        <h1>login here</h1>
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
          <input className="btn btn-primary" type="submit" value="login" />
        </form>
      </main>
    </Def>
  );
}

module.exports = login;
