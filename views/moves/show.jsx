const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <h1>{data.move.name}</h1>
        <p>currently no comments or tips</p>
      </main>
    </Def>
  );
}

module.exports = show;
