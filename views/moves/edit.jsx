const React = require("react");
const Def = require("../default");

function edit(data) {
  return (
    <Def>
      <main>
        <h1>Edit Move</h1>
        <form method="POST" action={`/moves/${data.move.id}?_method=PUT`}>
          <div className="row">
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
              <input
                className="form-control"
                id="position"
                name="position"
                value={data.move.position}
              />
            </div>
            <div className="form-group col-sm-6">
              <label htmlFor="type">submission or escape</label>
              <input
                className="form-control"
                id="type"
                name="type"
                required
                value={data.move.type}
              />
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
            <input
              className="btn btn-primary"
              type="submit"
              value="Edit Move"
            />
          </div>
        </form>
      </main>
    </Def>
  );
}

module.exports = edit;
