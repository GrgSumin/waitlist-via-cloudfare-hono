const destroyTestDb = async () => {
  const testDb = Bun.file("test.sqlite");
  if (await testDb.exists()) {
    await testDb.delete();
    console.log("Test database destroyed");
  } else {
    console.log("No test database to destroy");
  }
};

destroyTestDb();
