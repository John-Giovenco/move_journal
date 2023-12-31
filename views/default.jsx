const React = require("react");

function Def(html) {
  return (
    <html>
      <head>
        <title>title</title>
        <link rel="stylesheet" href="/css/style.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/moves">Moves</a>
            </li>
            <li>
              <a href="/moves/new">Add Move</a>
            </li>
            <li>
              <a href="users/login">Login</a>
            </li>
            <li>
              <a href="users/signup">Sign Up</a>
            </li>
          </ul>
        </nav>
        {html.children}
      </body>
    </html>
  );
}

module.exports = Def;
