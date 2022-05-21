import * as SQLite from "expo-sqlite";
// DATABASE PARA LISTAS CONTENEDORAS DE DESEOS
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
      console.log("Borrada una lista con id: ", id);
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

// DATABASE PARA ITEMS O DESEOS
const db_items = SQLite.openDatabase("items.db");

export const init_items = () => {
  const promise = new Promise((resolve, reject) => {
    db_items.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, price REAL NOT NULL, image TEXT NOT NULL, address TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL );",
        [],
        () => resolve(),
        (_, err) => reject(err)
      );
    });
  });

  return promise;
};

export const insertNewItem = (title, price, image, address, lat, lng) => {
  const promise = new Promise((resolve, reject) => {
    db_items.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO items (title, price, image, address, lat, lng) values (?, ?, ?, ?, ?, ?);",
        [date, title],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });

  return promise;
};

export const SelectItems = () => {
  const promise = new Promise((resolve, reject) => {
    db_items.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM items;",
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};

export const deleteItem = (id) => {
  const promise = new Promise((resolve, reject) => {
    db_items.transaction((tx) => {
      console.log("Borrado un item con id: ", id);
      tx.executeSql(
        "DELETE FROM items WHERE id = ?",
        [id],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};
