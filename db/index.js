import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("listas.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS listas (id INTEGER PRIMARY KEY NOT NULL, date TEXT NOT NULL, title TEXT NOT NULL);",
        [],
        () => resolve(),
        (_, err) => reject(err)
      );
    });
  });

  return promise;
};

export const insertNewList = (date, title) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO listas (date, title) values (?, ?);",
        [date, title],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });

  return promise;
};

export const SelectListas = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM listas;",
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};

export const deleteList = (id) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      console.log(id);
      tx.executeSql(
        "DELETE FROM listas WHERE id = ?",
        [id],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};
