import cors from "cors";
import express from "express";
import fs from "fs/promises";

const app = express();
const port = 5003;
app.use(cors());

app.get("/users", async (request, response) => {
  const data = await fs.readFile("users.json");
  const users = JSON.parse(data);
  response.json(users);
});

app.post("/users", async (request, response) => {
  const newRequest = request.body;
  newRequest.id = new Date().getTime();

  console.log(newRequest);

  const data = await fs.readFile("users.json");
  const users = JSON.parse(data);

  users.push(newRequest);
  console.log(users);
  fs.writeFile("users.json", JSON.stringify(users));
  response.json(users);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
