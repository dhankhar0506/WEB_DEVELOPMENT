## What is MongoDB?
-> MongoDB is a NoSQL document database that stores data in flexible JSON-like documents instead of rows and tables.

## Database, Collection, Document, Field
-> Database
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
                name, age, course'

| SQL      | MongoDB    |
| -------- | ---------- |
| Database | Database   |
| Table    | Collection |
| Row      | Document   |
| Column   | Field      |

## What is _id?
-> Every MongoDB document needs a unique _id.
-> If you don't provide one, MongoDB automatically generates it, commonly as an ObjectId.

## CRUD Operations?
1. Create :
        db.students.insertOne({
            name: "Gourav",
            age: 25
        });

    -> Multiple:
        db.students.insertMany([
            { name: "Aman", age: 22 },
            { name: "Rahul", age: 24 }
        ]);

2. Read :
    -> All students: db.students.find();
    -> specific : db.students.find({
                    name: "Gourav"
                });
    -> One document: db.students.findOne({
                            name: "Gourav"
                        });

3. Update
    -> db.students.updateOne({ name: "Gourav" },{$set: {age: 26}});

4. Delete => db.students.deleteOne({name: "Gourav"});
    - Many => db.students.deleteMany({
                    course: "MTech"
            });

5. Query Operators
    -> db.students.find({age: {$gte: 20,$lte: 30}});
    Greater -> db.students.find({age: { $gt: 20 }});
    Smaller -> {$lt}
    $gt   → greater than
    $gte  → greater than or equal
    $lt   → less than
    $lte  → less than or equal
    $eq   → equal
    $ne   → not equal
    $in   → value exists in list
    $nin  → value not in list

6. Logical Operators
    -> db.students.find({$and: [{ age: { $gt: 20 } },     { role: "student" }]});
    -> AND = $and
    -> OR =  $or

7. sorting
    -> db.students.find().sort({age: 1});
        -> 1 => Ascending
        -> -1 -> Descending

8.  Limit -> Return only 10 documents.
    -> db.students.find().limit(10);

9.  db.students.find().skip(10).limit(10);

10. Projection => Return only the fields we need    
    {
        name: "Gourav",
        age: 25,
        email: "...",
        password: "...",
        role: "student"
    }

    db.students.find({},{name: 1,email: 1});
    {
        name: "Gourav",
        email: "..."
    }

11. Handle Nested Obj
    -> MongoDB can store nested objects
        { name: "Gourav",address: {city: "Jalandhar",state: "Punjab"}}
    -> db.students.find({"address.city": "Jalandhar"});

12. Arrays
    -> {name: "Gourav",skills: ["React","Node","MongoDB"]}
    -> db.students.find({skills: "MongoDB"});

> find second highest salary 
-> db.students.find().sort({ salary: -1 }).skip(1).limit(1);

>  Employees salary greater than 50,000
-> db.employees.find({salary: { $gt: 50000 }});

> Salary between 50,000 and 80,000
-> db.employees.find({salary: { $gte: 50000, $lte: 80000}});

> Employees from IT department AND salary > 50,000
-> db.employees.find({department: "IT",salary: { $gt: 50000 }});

> Employee from Delhi OR Punjab
-> db.employees.find({$or: [{ city: "Delhi" },{ city: "Punjab" }]});
-> db.employees.find({ city: {$in: ["Delhi", "Punjab"] }});

> Employees NOT from Delhi
-> db.employees.find({city: { $ne: "Delhi" }});

>  Check whether a field exists
=> db.employees.find({salary: { $exists: true }});

## Aggregation
> $match => db.employees.aggregate([{$match: {salary: { $gt: 50000 } } }]);

> Find average salary department-wise.
-> In MongoDB $group, _id tells MongoDB which field to GROUP BY.
-> db.employees.aggregate([ {$group: { _id: "$department",averageSalary: { $avg: "$salary"}} }]);

> Find total salary department-wise.
-> db.employees.aggregate([{$group: {_id: "$department",totalSalary: {$sum: "$salary"}}}]);

>Highest salary department-wise: 
-> db.employees.aggregate([{$group: {_id: "$department",highestSalary: { $max: "$salary"}} }]);

> $count => db.employees.aggregate([{ $match: {department: "IT"}},{$count: "totalEmployees"}]);

>$unwind 
    ->breaks an array into individual pipeline documents.
    -> {name: "Gourav",skills: ["React","Node","MongoDB"]}

        {name: "Gourav",skills: "React"}

        {name: "Gourav",skills: "Node"}

        {name: "Gourav",skills: "MongoDB"}

> $regex — LIKE
    ^G -> start with G
    "xyz " -> contain
    -> db.employees.find({name: {$regex: "^G",$options: "i"}});
    -> db.employees.find({name: {$regex: "dhank",$options: "i"}});


## Joins
-> Suppose we have two collections/tables.

    userId   name
    ----------------
    1        Aman
    2        Rahul
    3        Neha
    4        Karan

    orderId   userId   product
    --------------------------
    101       1        Laptop
    102       1        Mobile
    103       2        Shoes
    104       5        Watch

-> We want information from both: JOIN combines related data from two tables/collections based on a matching field.

1. INNER JOIN => Returns only records that have a match in BOTH tables.
2. LEFT JOIN => Returns ALL records from the left table + matching records from the right table.
3. RIGHT JOIN => Returns ALL records from the right table + matching records from the left table.
4. FULL OUTER JOIN =>Returns everything from BOTH tables.
                    Matched records
                    +
                    Unmatched LEFT records
                    +
                    Unmatched RIGHT records
5. SELF JOIN -> A SELF JOIN joins a table with itself.
    ->SELF JOIN means joining a table with itself based on some relationship/condition between rows of that same table.
    id   name      managerId
    -------------------------
    1    Rahul     NULL
    2    Aman      1
    3    Gourav    1
    4    Neha      2