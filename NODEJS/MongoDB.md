# MongoDB

## What is MongoDB?

-> MongoDB is a NoSQL document database that stores data in flexible JSON-like documents instead of rows and tables.

---

## Database, Collection, Document, Field

```text
Database
└── college

    Collection
        └── students

        Document
            └── {
                name: "Gourav",
                age: 25,
                course: "MTech"
            }

            ↓

            Fields
            name, age, course
```

| SQL      | MongoDB    |
| -------- | ---------- |
| Database | Database   |
| Table    | Collection |
| Row      | Document   |
| Column   | Field      |

---

## What is `_id`?

-> Every MongoDB document needs a unique `_id`.

-> If you don't provide one, MongoDB automatically generates it, commonly as an `ObjectId`.

---

# CRUD Operations

## 1. Create

### Insert One

```js
db.students.insertOne({
    name: "Gourav",
    age: 25
});
```

### Insert Multiple

```js
db.students.insertMany([
    { name: "Aman", age: 22 },
    { name: "Rahul", age: 24 }
]);
```

---

## 2. Read

### Get All Students

```js
db.students.find();
```

### Find Specific Student

```js
db.students.find({
    name: "Gourav"
});
```

### Find One Document

```js
db.students.findOne({
    name: "Gourav"
});
```

---

## 3. Update

```js
db.students.updateOne(
    { name: "Gourav" },
    { $set: { age: 26 } }
);
```

---

## 4. Delete

### Delete One

```js
db.students.deleteOne({
    name: "Gourav"
});
```

### Delete Many

```js
db.students.deleteMany({
    course: "MTech"
});
```

---

# 5. Query Operators

```js
db.students.find({
    age: {
        $gte: 20,
        $lte: 30
    }
});
```

### Common Query Operators

| Operator | Meaning               |
| -------- | --------------------- |
| `$gt`    | Greater than          |
| `$gte`   | Greater than or equal |
| `$lt`    | Less than             |
| `$lte`   | Less than or equal    |
| `$eq`    | Equal                 |
| `$ne`    | Not equal             |
| `$in`    | Value exists in list  |
| `$nin`   | Value not in list     |

### Greater Than

```js
db.students.find({
    age: { $gt: 20 }
});
```

### Smaller Than

```js
db.students.find({
    age: { $lt: 20 }
});
```

---

# 6. Logical Operators

### AND

```js
db.students.find({
    $and: [
        { age: { $gt: 20 } },
        { role: "student" }
    ]
});
```

-> AND = `$and`

-> OR = `$or`

---

# 7. Sorting

```js
db.students.find().sort({
    age: 1
});
```

* `1` → Ascending
* `-1` → Descending

---

# 8. Limit

-> Return only 10 documents.

```js
db.students.find().limit(10);
```

---

# 9. Skip + Limit

```js
db.students.find()
    .skip(10)
    .limit(10);
```

---

# 10. Projection

-> Return only the fields we need.

Example document:

```js
{
    name: "Gourav",
    age: 25,
    email: "...",
    password: "...",
    role: "student"
}
```

### Return Only `name` and `email`

```js
db.students.find(
    {},
    {
        name: 1,
        email: 1
    }
);
```

Result:

```js
{
    name: "Gourav",
    email: "..."
}
```

---

# 11. Handle Nested Objects

-> MongoDB can store nested objects.

```js
{
    name: "Gourav",
    address: {
        city: "Jalandhar",
        state: "Punjab"
    }
}
```

### Search Nested Field

```js
db.students.find({
    "address.city": "Jalandhar"
});
```

---

# 12. Arrays

```js
{
    name: "Gourav",
    skills: ["React", "Node", "MongoDB"]
}
```

### Find Students Having MongoDB Skill

```js
db.students.find({
    skills: "MongoDB"
});
```

---

# Common MongoDB Interview Queries

## Find Second Highest Salary

```js
db.students.find()
    .sort({ salary: -1 })
    .skip(1)
    .limit(1);
```

---

## Employees with Salary Greater Than 50,000

```js
db.employees.find({
    salary: { $gt: 50000 }
});
```

---

## Salary Between 50,000 and 80,000

```js
db.employees.find({
    salary: {
        $gte: 50000,
        $lte: 80000
    }
});
```

---

## Employees from IT Department AND Salary > 50,000

```js
db.employees.find({
    department: "IT",
    salary: { $gt: 50000 }
});
```

---

## Employee from Delhi OR Punjab

```js
db.employees.find({
    $or: [
        { city: "Delhi" },
        { city: "Punjab" }
    ]
});
```

### Using `$in`

```js
db.employees.find({
    city: {
        $in: ["Delhi", "Punjab"]
    }
});
```

---

## Employees NOT from Delhi

```js
db.employees.find({
    city: { $ne: "Delhi" }
});
```

---

## Check Whether a Field Exists

```js
db.employees.find({
    salary: {
        $exists: true
    }
});
```

---

# Aggregation

## `$match`

```js
db.employees.aggregate([
    {
        $match: {
            salary: { $gt: 50000 }
        }
    }
]);
```

---

## Find Average Salary Department-Wise

-> In MongoDB `$group`, `_id` tells MongoDB which field to **GROUP BY**.

```js
db.employees.aggregate([
    {
        $group: {
            _id: "$department",
            averageSalary: {
                $avg: "$salary"
            }
        }
    }
]);
```

---

## Find Total Salary Department-Wise

```js
db.employees.aggregate([
    {
        $group: {
            _id: "$department",
            totalSalary: {
                $sum: "$salary"
            }
        }
    }
]);
```

---

## Highest Salary Department-Wise

```js
db.employees.aggregate([
    {
        $group: {
            _id: "$department",
            highestSalary: {
                $max: "$salary"
            }
        }
    }
]);
```

---

## `$count`

```js
db.employees.aggregate([
    {
        $match: {
            department: "IT"
        }
    },
    {
        $count: "totalEmployees"
    }
]);
```

---

# `$unwind`

-> `$unwind` breaks an array into individual pipeline documents.

Example:

```js
{
    name: "Gourav",
    skills: ["React", "Node", "MongoDB"]
}
```

After `$unwind`:

```js
{
    name: "Gourav",
    skills: "React"
}

{
    name: "Gourav",
    skills: "Node"
}

{
    name: "Gourav",
    skills: "MongoDB"
}
```

---

# `$regex` — LIKE

### Start With `G`

```text
^G
```

### Contain Text

```text
"xyz"
```

### Example

```js
db.employees.find({
    name: {
        $regex: "^G",
        $options: "i"
    }
});
```

```js
db.employees.find({
    name: {
        $regex: "dhank",
        $options: "i"
    }
});
```

---

# Joins

-> Suppose we have two collections/tables.

### Users

```text
userId   name
----------------
1        Aman
2        Rahul
3        Neha
4        Karan
```

### Orders

```text
orderId   userId   product
--------------------------
101       1        Laptop
102       1        Mobile
103       2        Shoes
104       5        Watch
```

-> We want information from both.

-> **JOIN** combines related data from two tables/collections based on a matching field.

---

## Types of Joins

### 1. INNER JOIN

-> Returns only records that have a match in **BOTH** tables.

---

### 2. LEFT JOIN

-> Returns **ALL** records from the left table + matching records from the right table.

---

### 3. RIGHT JOIN

-> Returns **ALL** records from the right table + matching records from the left table.

---

### 4. FULL OUTER JOIN

-> Returns everything from **BOTH** tables.

Includes:

* Matched records
* Unmatched LEFT records
* Unmatched RIGHT records

Example:

```text
1    Rahul     NULL
2    Aman      1
3    Gourav    1
4    Neha      2
```
