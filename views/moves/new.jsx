const React = require("react");
const Def = require("../default");

function newForm() {
  return (
    <Def>
      <main>
        <h1>Add New Move Here</h1>
        <form method="POST" action="/moves">
          <div className="form-group col-sm-6">
            <label htmlFor="name">Move Name</label>
            <input className="form-control" id="name" name="name" required />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="pic">Add Picture</label>
            <input className="form-control" type="url" id="pic" name="pic" />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="position">Position</label>
            <select className="form-control" name="position" id="position">
              <option value="blank"></option>
              <option value="Full Mount">Full Mount</option>
              <option value="Back Mount">Back Mount</option>
              <option value="Side Control">Side Control</option>
              <option value="Full Guard">Full Guard</option>
              <option value="Half Guard">Half Guard</option>
              <option value="De La Riva">De La Riva</option>
              <option value="Turtle">Turtle</option>
              <option value="Anywhere">Anywhere</option>
            </select>
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="type">submission or escape</label>
            <select className="form-control" name="type" id="type">
              <option value="empty"></option>
              <option value="submission">Submission</option>
              <option value="escape">Escape</option>
              <option value="advance position">Advance Position</option>
              <option value="anywhere">Anywhere</option>
            </select>
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="type">Description</label>
            <input
              className="form-control"
              id="description"
              name="description"
              required
            />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="learned">Date learned</label>
            <input
              type="number"
              className="form-control"
              name="date"
              id="date"
              value={new Date().getFullYear()}
            />
          </div>
          <input className="btn btn-primary" type="submit" value="Add Move" />
        </form>
      </main>
    </Def>
  );
}

module.exports = newForm;
