import db from "#db/client";
import { createEmployee } from "./queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  for (let i = 0; i < 10; i++) {
    const employee = {
      name: faker.name.text(),
      birthsday: faker.date.past({ years: 50 }),
      salary: faker.number.int({ min: 5000, max: 100000 }),
    };
    await createEmployee(employee);
  }
}
