const React = require("react");
const Def = require("../default");

function edit(data) {
  console.log(data);
  return (
    <Def>
      <main>
        <h1>Edit Move</h1>
        <form method="POST" action={`/moves/${data.move.id}?_method=PUT`}>
          <div className="form-group col-sm-6">
            <label htmlFor="name">Move Name</label>
            <input
              className="form-control"
              id="name"
              name="name"
              value={data.move.name}
              required
            />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="pic">Add Picture</label>
            <input
              className="form-control"
              type="url"
              id="pic"
              name="pic"
              value={data.move.pic}
            />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="position">Position</label>
            <select
              className="form-control"
              name="position"
              id="position"
              value={data.move.position}
            >
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
            <select
              className="form-control"
              name="type"
              id="type"
              value={data.move.type}
            >
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
              value={data.move.description}
              required
            />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="learned">Date Learned</label>
            <input
              type="number"
              className="form-control"
              name="date"
              id="date"
              value={data.move.date_added}
            />
          </div>
          <input
            className="btn btn-primary"
            type="submit"
            value="Update Move"
          />
        </form>
      </main>
    </Def>
  );
}

module.exports = edit;
