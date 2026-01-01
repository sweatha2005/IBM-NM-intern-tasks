const express = require("express");
const app = express();

app.use(express.json());

// Sample student data (20 records)
let students = [
  { id: 1, name: "Arjun Kumar", rollNo: 101, address: "Chennai", mobile: "9876543210", standard: "10" },
  { id: 2, name: "Priya Sharma", rollNo: 102, address: "Bangalore", mobile: "9876543211", standard: "9" },
  { id: 3, name: "Rahul Verma", rollNo: 103, address: "Delhi", mobile: "9876543212", standard: "10" },
  { id: 4, name: "Sneha Patel", rollNo: 104, address: "Ahmedabad", mobile: "9876543213", standard: "8" },
  { id: 5, name: "Vikram Singh", rollNo: 105, address: "Jaipur", mobile: "9876543214", standard: "12" },
  { id: 6, name: "Ananya Das", rollNo: 106, address: "Kolkata", mobile: "9876543215", standard: "11" },
  { id: 7, name: "Karan Mehta", rollNo: 107, address: "Mumbai", mobile: "9876543216", standard: "9" },
  { id: 8, name: "Pooja Nair", rollNo: 108, address: "Kochi", mobile: "9876543217", standard: "10" },
  { id: 9, name: "Amit Joshi", rollNo: 109, address: "Pune", mobile: "9876543218", standard: "8" },
  { id: 10, name: "Neha Gupta", rollNo: 110, address: "Noida", mobile: "9876543219", standard: "12" },
  { id: 11, name: "Suresh Reddy", rollNo: 111, address: "Hyderabad", mobile: "9876543220", standard: "11" },
  { id: 12, name: "Divya Iyer", rollNo: 112, address: "Coimbatore", mobile: "9876543221", standard: "10" },
  { id: 13, name: "Manoj Yadav", rollNo: 113, address: "Lucknow", mobile: "9876543222", standard: "9" },
  { id: 14, name: "Kavya Rao", rollNo: 114, address: "Mysore", mobile: "9876543223", standard: "8" },
  { id: 15, name: "Rohit Malhotra", rollNo: 115, address: "Gurgaon", mobile: "9876543224", standard: "12" },
  { id: 16, name: "Aishwarya Pillai", rollNo: 116, address: "Trivandrum", mobile: "9876543225", standard: "11" },
  { id: 17, name: "Nikhil Jain", rollNo: 117, address: "Indore", mobile: "9876543226", standard: "10" },
  { id: 18, name: "Meena Choudhary", rollNo: 118, address: "Udaipur", mobile: "9876543227", standard: "9" },
  { id: 19, name: "Sanjay Kulkarni", rollNo: 119, address: "Nagpur", mobile: "9876543228", standard: "8" },
  { id: 20, name: "Ritika Bansal", rollNo: 120, address: "Faridabad", mobile: "9876543229", standard: "12" }
];

// GET – Read all students
app.get("/students", (req, res) => {
  res.json(students);
});

// GET – Read student by ID
app.get("/students/:id", (req, res) => {
  const student = students.find(s => s.id == req.params.id);
  student ? res.json(student) : res.status(404).json({ message: "Student not found" });
});

// POST – Create new student
app.post("/students", (req, res) => {
  const newStudent = {
    id: students.length + 1,
    ...req.body
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// PUT – Update student
app.put("/students/:id", (req, res) => {
  const index = students.findIndex(s => s.id == req.params.id);
  if (index !== -1) {
    students[index] = { id: students[index].id, ...req.body };
    res.json(students[index]);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

// DELETE – Remove student
app.delete("/students/:id", (req, res) => {
  students = students.filter(s => s.id != req.params.id);
  res.json({ message: "Student deleted successfully" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
