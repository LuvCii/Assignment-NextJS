// import expressJWT from "express-jwt";

export const checkAuth = (req, res, next) => {
  const status = true;
  if (status) {
    next();
  } else {
    console.log("anh la ai?");
  }
};
