const React = require("react");
const Def = require("../default");

function index(data) {
  let movesFormatted = data.moves.map((move) => {
    return (
      <div>
        <h1>{move.name}</h1>
        <img src={move.pic} alt={move.name} />
      </div>
    );
  });
  return (
    <Def>
      <main>
        <h1>MOVES INDEX PAGE</h1>
        {movesFormatted}
      </main>
    </Def>
  );
}

module.exports = index;
