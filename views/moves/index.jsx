const React = require("react");
const Def = require("../default");

function index(data) {
  let movesFormatted = data.moves.map((move) => {
    return (
      <div className="col-sm-6">
        <h2>
          <a href={`/moves/${move.id}`}>{move.name}</a>
        </h2>
        <p className="text-center">{move.position}</p>
        <img src={move.pic} alt={move.name} />
        <p className="text-center">
          This move is a {move.submission}, {move.escape}
        </p>
      </div>
    );
  });
  return (
    <Def>
      <main>
        <h1>MOVES INDEX PAGE</h1>
        <div className="row">{movesFormatted}</div>
      </main>
    </Def>
  );
}

module.exports = index;
