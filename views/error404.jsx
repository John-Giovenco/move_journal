const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1>404 page</h1>
        <p>Sorry cant find that page, you've been submitted!</p>
        <div>
          <img
            width="900"
            height="600"
            src="/images/Rear-cross-collar-choke.jpg"
            alt="collar choke"
          />
        </div>
      </main>
    </Def>
  );
}

module.exports = error404;
