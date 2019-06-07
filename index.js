const { json, send } = require("micro");

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
      send(res, 200, { status: SUCCESS, token: "--token--"})
    }
    send(res, 401, { status: FAILURE, error: "Unauthaurized"})
  } catch (error) {
    send(res, 500, { status: ERROR, error })
  }
};
