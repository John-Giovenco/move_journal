const React = require("react");
const Def = require("../default");
const comment = require("../../models/comment");

function show(data) {
  let comments = <h3 className="inactive">No tips or comments yet</h3>;
  let percentage = <h3 className="inactive">Not yet rated</h3>;
  if (data.move.comments.length) {
    let sumPercentages = data.move.comments.reduce((tot, c) => {
      return tot + c.percentage;
    }, 0);
    let averagePercentage = sumPercentages / data.move.comments.length;
    percentage = <h3>{Math.round(averagePercentage)}%</h3>;
  }
  if (data.move.comments.length) {
    comments = data.move.comments.map((c) => {
      return (
        <div>
          <h2>{c.content}</h2>
          <h3>{c.author}</h3>
          <h4>Success Percentage: {c.percentage}%</h4>
          <form
            method="POST"
            action={`/moves/${data.move.id}/comment/${c.id}?_method=DELETE`}
          >
            <input
              type="submit"
              className="btn btn-danger"
              value="Delete Comment"
            />
          </form>
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
            <h1>Success Rate</h1>
            {percentage}
            <h1>{data.move.pic}</h1>
            <h1>Tips and Comments</h1>
            {comments}
            <h1>This move was learned on {data.move.date}</h1>
            <h1>Type {data.move.type}</h1>
            <h1>This move can be hit from {data.move.position}</h1>
            <h1>Description {data.move.description}</h1>
          </div>
          <div className="col-sm-6">
            <a href={`/moves/${data.move.id}/edit`} className="btn btn-warning">
              Edit
            </a>
          </div>
          <div className="col-sm-6">
            <form
              method="POST"
              action={`/moves/${data.move.id}?_method=DELETE`}
            >
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
              <textarea
                name="content"
                id="content"
                cols="30"
                className="form-control"
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-4">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                id="author"
                name="author"
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-12">
              <label htmlFor="percentage">Success Percentage</label>
              <input
                type="range"
                id="percentage"
                name="percentage"
                min="0"
                max="100"
              />
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
