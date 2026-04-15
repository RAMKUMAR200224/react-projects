const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// 📁 File path
const filePath = "./src/data/data.json";

// ✅ Home route
app.get("/", (req, res) => {
  res.send("🚀 Server working on http://localhost:5001");
});

// ✅ Save data (POST)
app.post("/save", (req, res) => {
  console.log("Received:", req.body);

  let existingData = [];

  // Read existing data
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    try {
      existingData = JSON.parse(fileContent);
    } catch {
      existingData = [];
    }
  }

  // Add new data
  existingData.push(req.body);

  // Save to file
  fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

  res.send("✅ Data saved successfully!");
});

// ✅ Get all data (JSON)
app.get("/data", (req, res) => {
  if (!fs.existsSync(filePath)) {
    return res.json([]);
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");

  try {
    const data = JSON.parse(fileContent);
    res.json(data);
  } catch {
    res.json([]);
  }
});

// ✅ View data in browser (HTML)
app.get("/view", (req, res) => {
  if (!fs.existsSync(filePath)) {
    return res.send("<h2>No data found</h2>");
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  let data = [];

  try {
    data = JSON.parse(fileContent);
  } catch {
    data = [];
  }

  let html = `
    <h2 style="text-align:center;">Saved Student Data</h2>
    <table border="1" cellpadding="10" style="margin:auto;">
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Course</th>
      </tr>
  `;

  data.forEach((item) => {
    html += `
      <tr>
        <td>${item.firstName}</td>
        <td>${item.lastName}</td>
        <td>${item.email}</td>
        <td>${item.phone}</td>
        <td>${item.course}</td>
      </tr>
    `;
  });

  html += "</table>";

  res.send(html);
});

// ✅ Start server
app.listen(5001, () => {
  console.log("🚀 Server running on http://localhost:5001");
});