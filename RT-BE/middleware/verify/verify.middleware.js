const jwt = require("jsonwebtoken");
const { deletedToken } = require("../../store");
const { create_error } = require("../../utility/create_error");
require("dotenv").config();
const db = require("../../model");

exports.verifyToken = async function (req, res, next) {
  const token = req.headers["x-access-token"];
  try {
    if (deletedToken.includes(token)) throw create_error(401, "login again");
    if (!token) throw create_error(401, "login again");

    jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
      if (err) throw create_error(401, "login again");

      req.username = decode.username;
      req.role = decode.role;
      req.id = decode.id;

      next();
    });
  } catch (error) {
    next(error);
  }
};

exports.verifyPermission =
  (permission = null) =>
  async (req, res, next) => {
    try {
      let role = await db.role.findById(req.role);

      if (!role) throw create_error(400, "no role found");

      if (
        role.permissions.includes(permission) ||
        role.permissions.includes("All")
      )
        next();
      else throw create_error(401, "not authourised");
    } catch (error) {
      next(error);
    }
  };
