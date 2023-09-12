const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>Jiu Jitsu Journal</h1>
        <a href="/moves">
          <button className="btn-primary">Moves Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
