const { StatusCodes } = require("http-status-codes");
const { users } = require("../data/userdata");



const userControllers = {
   getAllUsers: (req, res) => {
      if (users.length === 0) {
         res.json({ message: "Oops!!", data: null });
      }

      return res.json({
         message: "OK",
         data: users,
      });
   },

   getUserById: (req, res) => {
      const singleUser = users.filter((u) => u.id === Number(req.params.id));

      return res.json({
         message: "ok",
         data: singleUser,
      });
   },

   addUser: (req, res) => {
      const { id, name, age, work, hobbies } = req.body;
      if (!id || !name || !age || !work || !hobbies) {
         res.status(StatusCodes.BAD_REQUEST).json({
            message: "Oops!!",
            data: null,
         });
      }
      users.push({
         id,
         name,
         age,
         work,
         hobbies,
      });
      return res.status(StatusCodes.OK).json({
         message: "User Added",
         data: [{ id, name, age, work, hobbies }],
      });
   },
};

module.exports = userControllers;
