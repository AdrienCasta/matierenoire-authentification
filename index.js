const { json } = require("micro");

const USERNAME = "Matierenoire";
const PASSWORD = "1234";

const status = {
  FAILURE: "failure",
  SUCCESS: "success",
  ERROR: "error"
};

module.exports = async (req, res) => {
  const { FAILURE, SUCCESS, ERROR } = status;
  try {
    const { username, password } = await json(req);
    if (username === USERNAME && password === PASSWORD) {
      res.end(SUCCESS);
    }
    res.end(FAILURE);
  } catch (e) {
    res.end(`${ERROR} ${e}`);
  }
};
