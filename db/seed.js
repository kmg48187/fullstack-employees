import db from "#db/client";
import { createEmployee } from "./queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  for (let i = 0; i < 11; i++) {
    const employee = {
      name: "Employee" + i,
      birthsday: "2002-01-01",
      salary: Math.floor(Math.random()* 500000),
    };
    await createEmployee(employee);
  }
}
