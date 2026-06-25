const { json } = require("express");
const User = require("../model/user");

async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ massage: "internal server erorr", error: error.massage });
  }
}

async function getUserById(req, res) {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ massage: " No User Fond" });
    }
    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ massage: "internal server erorr", error: error.massage });
  }


  
}
async function createUser(req, res){
  try {
     const newUser = await User.create(req.body);
     res.status(201).json(newUser);
  } catch (error) { 
    res.status(400).json({massage:"Usr Creation failed", error: error.massage })
  }

}



// app.delete('/api/users/:id', async (req, res) => {
//   const userId = req.params.id;
  
//   // Your logic to delete the user from the database goes here
//   // ...

//   res.status(200).send({ message: "User deleted successfully" });
// })
async function delUserById(req, res) {
  try {
    // 1. Use findByIdAndDelete which directly accepts an ID string
    const delUser = await User.findByIdAndDelete(req.params.id);

    // 2. If no user was found with that ID, return 404
    if (!delUser) {
      return res.status(404).json({ massage: " User Not Found" });
    }
    
    // 3. Return success (and use the correct variable 'delUser')
    res.status(200).json({ 
      massage: "User deleted successfully", 
      deletedUser: delUser 
    });

  } catch (error) {
    res
      .status(500)
      .json({ massage: "internal server error", error: error.message }); // Fixed .message
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  delUserById
  
}
