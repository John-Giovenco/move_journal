const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = <h3 className="inactive">No tips or comments yet</h3>;
  if (data.move.comments.length) {
    comments = data.move.comments.map((c) => {
      return (
        <div classname="border">
          <h2>{c.content}</h2>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Success Percentage: {c.percentage}%</h4>
        </div>
      );
    });
  }
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
          <hr />
        </div>
        <hr />
        <h2>Tips and Comments</h2>
        <form action={`/moves/${data.move.id}/comment`} method="POST">
          <div className="row">
            <div className="form-group col-sm-6">
              <label htmlFor="content">Tip or Comment</label>
              <input
                className="form-control"
                id="content"
                name="content"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-12">
              <label htmlFor="author">Author</label>
              <input type="text" id="author" name="author" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-12">
              <label htmlFor="percentage">Success Percentage</label>
              <input type="number" id="percentage" name="percentage" />
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-primary"
            value="Add Comment"
          />
        </form>
      </main>
    </Def>
  );
}

module.exports = show;
