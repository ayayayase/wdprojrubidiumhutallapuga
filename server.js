const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
const fs = require("fs");

const USERS_FILE = path.join(__dirname, "users.json");

function loadUsers() {
  if (fs.existsSync(USERS_FILE)) {
    return JSON.parse(fs.readFileSync(USERS_FILE));
  }
  return {};
}

function saveUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

const sessions = {};

function parseCookies(cookieHeader) {
  if (!cookieHeader) return {};
  return Object.fromEntries(cookieHeader.split('; ').map(c => c.split('=')));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html")); // Change if your homepage is different
});
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  const users = loadUsers();

  if (users[username]) {
    res.status(409).send("Username already taken!");
  } else {
    users[username] = password;
    saveUsers(users);
    res.redirect("/page5.html");
  }
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const users = loadUsers();

  if (users[username] && users[username] === password) {
    const sessionId = Date.now().toString();
    sessions[sessionId] = { username };
    res.setHeader("Set-Cookie", `sid=${sessionId}; HttpOnly; Path=/`);
    res.redirect("/page5.html");
  } else {
    res.status(401).send("Invalid username or password");
  }
});


// CHECK IF USER IS LOGGED IN
app.get("/check-auth", (req, res) => {
  const cookies = parseCookies(req.headers.cookie);
  const session = sessions[cookies.sid];
  if (session) {
    res.json({ loggedIn: true, username: session.username });
  } else {
    res.json({ loggedIn: false });
  }
});

app.get("/logout", (req, res) => {
  const cookies = parseCookies(req.headers.cookie);
  delete sessions[cookies.sid];
  res.setHeader("Set-Cookie", `sid=; Max-Age=0; Path=/`);
  res.redirect("/page5.html");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
