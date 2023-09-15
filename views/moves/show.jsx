const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
            <h1>{data.move.name}</h1>
            <h2>{data.move.pic}</h2>
            <h3>This move was learned on {data.move.date}</h3>
            <h4>Type {data.move.type}</h4>
            <h5>This move can be hit from {data.move.position}</h5>
            <h6>Description {data.move.description}</h6>
          </div>
          <div className="col-sm-6">
            <a href={`/moves/${data.id}/edit`} className="btn btn-warning">
              Edit
            </a>
          </div>
          <div className="col-sm-6">
            <form method="POST" action={`/moves/${data.id}?_method=DELETE`}>
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
