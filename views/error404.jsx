const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1>404 page</h1>
        <p>Sorry you've been submitted and cant find that page</p>
      </main>
    </Def>
  );
}

module.exports = error404;
