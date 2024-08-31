import connectDB from "./db/dbConnect.js";
import app from './app.js';

connectDB()
  .then(() => {
    // Start the server
    const server = app.listen(process.env.PORT || 8000, () => {
      console.log("Server started on port", process.env.PORT || 8000);
    });

    // Handle any server-related errors
    server.on("error", (error) => {
      console.error("Server error:", error);
      throw error;  // You can handle the error in a different way if needed
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failure !!", err);
  });
