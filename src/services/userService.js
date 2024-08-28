const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const { getUserIdByToken } = require("../config/jwtprovider");

module.exports = {
    async createUser(userdata) {
        try {
            let { fullName, email, password, confirmPassword, role ,userAddress} = userdata;

           
            if (password !== confirmPassword) {
                throw new Error('Passwords do not match');
            }

            const isUserExist = await User.findOne({ email: email });
            if (isUserExist) {
                throw new Error('User already exists with this email address');
            }

            password = await bcrypt.hash(password, 8);
            const user = await User.create({
                fullName,
                email,
                password,
                confirmPassword,
                role,
                userAddress
            });

            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    
    async getUserByEmail(email) {
        try {
            const user = await User.findOne({ email: email }).populate('favorites').populate('properties');
            if (!user) {
                throw new Error('User not found');
            }
            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    
    async findUserById(userId) {
        try {
            const user = await User.findById(userId).populate('favorites').populate('properties');
            if (!user) {
                throw new Error('User not found with this ID');
            }
            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    
    async findUserProfileByJwt(jwt) {
        try {
            const userId = getUserIdByToken(jwt).populate('favorites').populate('properties');
            const user = await this.findUserById(userId);
            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    
    async findAllUsers() {
        try {
            const users = await User.find();
            return users;
        } catch (error) {
            throw new Error(error.message);
        }
    },
      // Add updateUser function
      async updateUser(userId, updateData) {
        try {
            const user = await User.findById(userId);
            if (!user) {
                throw new Error('User not found with this ID');
            }

            // Check if the user wants to update the password
            if (updateData.password) {
                if (updateData.password !== updateData.confirmPassword) {
                    throw new Error('Passwords do not match');
                }
                updateData.password = await bcrypt.hash(updateData.password, 8);
            }

            // Update user details
            Object.assign(user, updateData);  // This will update only the fields present in updateData
            await user.save();

            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};




