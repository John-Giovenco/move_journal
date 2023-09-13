const React = require("react");
const Def = require("../default");

function newForm() {
  return (
    <Def>
      <main>
        <h1>Add New Move Here</h1>
        <form method="POST" action="/moves">
          <div className="form-group">
            <label htmlFor="name">Move Name</label>
            <input className="form-control" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="pic">Add Picture</label>
            <input className="form-control" type="url" id="pic" name="pic" />
          </div>
          <div className="form-group">
            <label htmlFor="position">Position</label>
            <input className="form-control" id="position" name="position" />
          </div>
          <div className="form-group">
            <label htmlFor="type">submission or escape</label>
            <input className="form-control" id="type" name="type" required />
          </div>
          <div className="form-group">
            <label htmlFor="type">Description</label>
            <input
              className="form-control"
              id="description"
              name="description"
              required
            />
          </div>
          <input className="btn btn-primary" type="submit" value="Add Move" />
        </form>
      </main>
    </Def>
  );
}

module.exports = newForm;
