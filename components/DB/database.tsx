import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync("DailyWork.db");

export async function initDB() {
  await db.execAsync(`
        PRAGMA journal_mode = WAL;
        
        CREATE TABLE IF NOT EXISTS Categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
        name VARCHAR(255) NOT NULL
        );
        
        CREATE TABLE IF NOT EXISTS Status (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
        name VARCHAR(255) NOT NULL);
        
        CREATE TABLE IF NOT EXISTS Creditors (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
        name VARCHAR(255) NOT NULL);
        
        CREATE TABLE IF NOT EXISTS Notes (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
        name VARCHAR(255) NOT NULL);
        
        CREATE TABLE IF NOT EXISTS Creditors (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
        title VARCHAR(255) NOT NULL, 
        description VARCHAR(255) NOT NULL);

        CREATE TABLE IF NOT EXISTS Jobs (
            id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
            categoryID INTEGER NOT NULL, 
            statusID INTEGER NOT NULL, 
            title VARCHAR(50) NOT NULL, 
            description VARCHAR(255), 
            price FLOAT(2) NOT NULL, 
            date DATE NOT NULL, 
            dueDate DATE, 
            FOREIGN KEY (categoryID) REFERENCES Categories(id),
            FOREIGN KEY (statusID) REFERENCES Status(id));
    `);
}

// export async function getAll() {
//   const allRows = await db.getAllAsync('SELECT * FROM tableName');
//   for (const row of allRows) {
//     console.log(row.id, row.value, row.intValue);
//   }
// }