const app = require("./server.js");
const PORT = 4000;
require("./database/db.js");

app.listen(PORT, () => console.log("App listening PORT: " + PORT));
