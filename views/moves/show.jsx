const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <h1>{data.move.name}</h1>
        <p>currently no comments or tips</p>
        <p>comments and tips</p>
        <a href={`/moves/${data.id}/edit`} className="btn btn-warning">
          Edit
        </a>
        <form method="POST" action={`/moves/${data.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </main>
    </Def>
  );
}

module.exports = show;
