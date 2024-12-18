### Project Structure

```
user-management-api/
│
├── src/
│   ├── controllers/
│   │   └── userController.js
│   ├── models/
│   │   └── userModel.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   └── errorMiddleware.js
│   └── app.js
│
├── package.json
├── .env
└── README.md
```

### Step-by-Step Implementation

1. **Initialize the Project**

   Run the following commands to create a new Node.js project:

   ```bash
   mkdir user-management-api
   cd user-management-api
   npm init -y
   npm install express mongoose dotenv
   ```

2. **Create the Database Configuration**

   Create a file `src/config/db.js` to connect to MongoDB:

   ```javascript
   const mongoose = require('mongoose');
   const dotenv = require('dotenv');

   dotenv.config();

   const connectDB = async () => {
       try {
           await mongoose.connect(process.env.MONGODB_URI, {
               useNewUrlParser: true,
               useUnifiedTopology: true,
           });
           console.log('MongoDB connected');
       } catch (error) {
           console.error('MongoDB connection failed:', error.message);
           process.exit(1);
       }
   };

   module.exports = connectDB;
   ```

3. **Create the User Model**

   Create a file `src/models/userModel.js`:

   ```javascript
   const mongoose = require('mongoose');

   const userSchema = new mongoose.Schema({
       name: {
           type: String,
           required: true,
       },
   });

   const User = mongoose.model('User', userSchema);

   module.exports = User;
   ```

4. **Create the User Controller**

   Create a file `src/controllers/userController.js`:

   ```javascript
   const User = require('../models/userModel');

   // Create a new user
   const createUser = async (req, res) => {
       const { name } = req.body;
       const user = new User({ name });
       await user.save();
       res.status(201).json(user);
   };

   // Get a user by ID
   const getUserById = async (req, res) => {
       const { id } = req.params;
       const user = await User.findById(id);
       if (!user) return res.status(404).json({ message: 'User not found' });
       res.json(user);
   };

   // Update a user by ID
   const updateUser = async (req, res) => {
       const { id } = req.params;
       const user = await User.findByIdAndUpdate(id, req.body, { new: true });
       if (!user) return res.status(404).json({ message: 'User not found' });
       res.json(user);
   };

   // Delete a user by ID
   const deleteUser = async (req, res) => {
       const { id } = req.params;
       const user = await User.findByIdAndDelete(id);
       if (!user) return res.status(404).json({ message: 'User not found' });
       res.status(204).send();
   };

   // Get all users
   const getAllUsers = async (req, res) => {
       const users = await User.find();
       res.json(users);
   };

   module.exports = {
       createUser,
       getUserById,
       updateUser,
       deleteUser,
       getAllUsers,
   };
   ```

5. **Create the User Routes**

   Create a file `src/routes/userRoutes.js`:

   ```javascript
   const express = require('express');
   const {
       createUser,
       getUserById,
       updateUser,
       deleteUser,
       getAllUsers,
   } = require('../controllers/userController');

   const router = express.Router();

   router.post('/', createUser);
   router.get('/', getAllUsers);
   router.get('/:id', getUserById);
   router.put('/:id', updateUser);
   router.patch('/:id', updateUser);
   router.delete('/:id', deleteUser);

   module.exports = router;
   ```

6. **Set Up the Express App**

   Create a file `src/app.js`:

   ```javascript
   const express = require('express');
   const connectDB = require('./config/db');
   const userRoutes = require('./routes/userRoutes');
   const dotenv = require('dotenv');

   dotenv.config();

   const app = express();
   connectDB();

   app.use(express.json());
   app.use('/users', userRoutes);

   const PORT = process.env.PORT || 3000;

   app.listen(PORT, () => {
       console.log(`Server is running on port ${PORT}`);
   });
   ```

7. **Create the Environment Variables File**

   Create a `.env` file in the root directory:

   ```
   MONGODB_URI=mongodb://localhost:27017/user_management
   PORT=3000
   ```

8. **Run the Application**

   Start the server:

   ```bash
   node src/app.js
   ```

### Testing the API

You can use Postman or any other API testing tool to test the following endpoints:

- **Create a new user**: `POST /users`
- **Get all users**: `GET /users`
- **Get a user by ID**: `GET /users/:id`
- **Update a user by ID**: `PUT /users/:id`
- **Delete a user by ID**: `DELETE /users/:id`

### Conclusion

This project structure provides a solid foundation for managing user items through a RESTful API. You can expand upon this by adding more features, such as authentication, validation, and error handling.