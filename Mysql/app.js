import mysql from "mysql2/promise";

const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Myd@teofb1rth2003",
    database: "mysql_db",

});

console.log('MySql Connected Successfully');

// await  db.execute(`create database mysql_db`)

// console.log(await db.execute(`show databases`));

// db.execute(`CREATE TABLE user (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     user VARCHAR(100),
//     email VARCHAR(100)
// );
// `)
// db.execute(`INSERT INTO user (user, email) VALUES
// ('Abhishek Patil', 'abhishek@example.com'),
// ('Rohit Sharma', 'rohit@example.com'),
// ('Sneha Verma', 'sneha@example.com'),
// ('Amit Desai', 'amit@example.com'),
// ('Priya Singh', 'priya@example.com');`)

const values = [
    ['Abhishek Patil', 'abhishek@example.com'],
    ['Rohit Sharma', 'rohit@example.com']
    ['Sneha Verma', 'sneha@example.com'],
    ['Amit Desai', 'amit@example.com'],
    ['Priya Singh', 'priya@example.com'],
];
//read

// const [row] = await db.execute(`select * from user;`);
// console.log(row);
// const [row] = await db.execute(`select * from user;`);
// await db.query(`insert into user(user,email) values ?, [values]`)

//DElete

try {
    const [row] = await db.execute(`delete from user where user = 'Mindblowing Abhishek'  `)
  
    
} catch (error) {
    console.log(error);
    
}
// upsdate
// try {
//     const [row] = await db.execute(`update user set  where user = "Mindblowing Abhishek" `)
    
//     console.log("ALL users", row );
// }
// catch (error) {
//     console.log(error);
    
// }

const [row] = await db.execute(`Select * from user`)
console.log("All user are", row);
