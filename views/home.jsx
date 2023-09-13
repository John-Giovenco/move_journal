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
        <div>
          <img
            width="500"
            height="600"
            src="/images/armbar_comp.jpg"
            alt="bjj student"
          />
        </div>
      </main>
    </Def>
  );
}

module.exports = home;
