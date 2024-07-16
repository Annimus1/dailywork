import * as SQLite from 'expo-sqlite';
import { JobType } from '../types';

const db = SQLite.openDatabaseSync("DailyWork.db");

export async function initDB() {
  await db.execAsync(`
        PRAGMA journal_mode = WAL;
        
        CREATE TABLE IF NOT EXISTS Categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
        name VARCHAR(255) NOT NULL UNIQUE
        );
        
        CREATE TABLE IF NOT EXISTS Status (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
        name VARCHAR(255) NOT NULL UNIQUE);
        
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
            payment FLOAT(2) NOT NULL, 
            date DATE NOT NULL, 
            dueDate DATE, 
            FOREIGN KEY (categoryID) REFERENCES Categories(id),
            FOREIGN KEY (statusID) REFERENCES Status(id));
    `);
}

export async function saveJob(Job:JobType){
  
  const statement = await db.prepareAsync(
    `INSERT INTO Jobs (categoryID, statusID, title, description, payment, date, dueDate) 
                 VALUES ($categoryID, $statusID, $title, $description, $payment, $date, $dueDate)`
  );

  try {
    let result = await statement.executeAsync({ 
      $categoryID: Job.category,
      $statusID: Job.status,
      $title: Job.title,
      $description: Job.description,
      $payment: Job.payment,
      $date: Job.date,
      $dueDate: Job.dueDate
    });
  }
  finally {
    await statement.finalizeAsync();
  }
  
}

export async function getJobs(){
  const allRows = await db.getAllAsync('SELECT * FROM Jobs');
 
  return allRows;
}

export async function CreateCategory(categoryName:String){
  
  const statement = await db.prepareAsync(
    'INSERT INTO Categories (name) VALUES ($category)'
  );

  try {
    let result = await statement.executeAsync({ $category: categoryName});
  }
  finally {
    await statement.finalizeAsync();
  }
  
}

export async function CreateStatus(statusName:String){
  
  const statement = await db.prepareAsync(
    'INSERT INTO Status (name) VALUES ($status)'
  );

  try {
    let result = await statement.executeAsync({ $status: statusName});
  }
  finally {
    await statement.finalizeAsync();
  }
  
}

export async function getCategories(){
  const allRows = await db.getAllAsync('SELECT * FROM Categories');
  const allCategories = [];

  for (const row of allRows) {
    let cat = {label: row.name , value: row.id}
    allCategories.push(cat);
  }

  return allCategories;
}

export async function getStatus(){
  const allRows = await db.getAllAsync('SELECT * FROM Status');
  const allStatus = [];

  for (const row of allRows) {
    let stat = {label: row.name , value: row.id}
    allStatus.push(stat);
  }

  return allStatus;
}

export async function cleanDB(table:String){
  await db.execAsync(`DROP TABLE ${table};`)
}