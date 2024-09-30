import fs from "node:fs/promises";
const caminho_bancoDeDados = new URL("db.json", import.meta.url);
export class Database {
  #database = {};

  constructor() {
    fs.readFile(caminho_bancoDeDados, "utf8")
      .then((data) => {
        this.#database = JSON.parse(data);
      })
      .catch(() => this.persistir());
  }

  persistir() {
    fs.writeFile(caminho_bancoDeDados, JSON.stringify(this.#database));
  }

  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data);
    } else {
      this.#database[table] = [data];
    }

    this.persistir();
  }
  select(table) {
    return this.#database[table] ?? []
  }
}
