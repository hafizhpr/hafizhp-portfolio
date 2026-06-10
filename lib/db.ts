import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

const DB_PATH = process.env.DB_PATH || path.join(process.cwd(), "data", "inquiries.db");

const dir = path.dirname(DB_PATH);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const db = new Database(DB_PATH);

db.exec(`
  CREATE TABLE IF NOT EXISTS inquiries (
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    name      TEXT NOT NULL,
    company   TEXT,
    email     TEXT NOT NULL,
    phone     TEXT,
    project_type TEXT,
    timeline  TEXT,
    description TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  )
`);

export default db;
