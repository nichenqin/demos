const getUser = (id, callback) => {
  const user = {
    id,
    name: "nichenqin"
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(31, ({ name }) => {
  console.log(name);
});
