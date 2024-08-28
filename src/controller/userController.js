const userService = require("../services/userService");

module.exports = {
    getUserProfileHandler: async (req, res) => {
        try {
            const user=req.user
         
           // const jwt = req.headers.authorization?.split(' ')[1];
            //if (!jwt) {
           //     return res.status(401).json({ error: "Token is missing" });
           // }

           // const user = await userService.findUserProfileByJwt(jwt);
            user.password = null; 

            res.status(200).json(user);

        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(500).json({ error: "Internal server error" });
            }
        }
    },  getUserByEmail: async(req, res)=> {
        try {
            const user = await userService.getUserByEmail(req.params.email);
            res.status(200).json(user);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

     findUserById: async(req, res)=> {
        try {
            const user = await userService.findUserById(req.params.id);

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
              }
            res.status(200).json(user);
        } catch (error) {
           // Log the error for debugging
    console.error('Error fetching user:', error);
    // Use 500 status code for unexpected errors
    res.status(500).json({ message: 'Server error' });
        }
    },

     findUserProfileByJwt: async(req, res)=> {
        try {
            const user = await userService.findUserProfileByJwt(jwt);
            res.status(200).json(user);
        } catch (error) {
            res.status(401).json({ message: error.message });
        }
    },

     findAllUsers: async(req, res)=> {
        try {
            const users = await userService.findAllUsers();
            if (users.length === 0) {
                return res.status(404).json({ message: 'No users found' });
            }
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
     updateUser:async(req, res) =>{
        try {
            const userId = req.params.id; // Get user ID from request parameters
            const updateData = req.body; // Get updated data from request body

            const updatedUser = await userService.updateUser(userId, updateData);

            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
};

