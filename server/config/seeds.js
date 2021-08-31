const { User, Product, Category, Order } = require("../models");
const db = require("./connection");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Product.deleteMany({});
    await Category.deleteMany({});
    await Order.deleteMany({});
    const categories = await Category.insertMany([
      {
        name: "winter",
      },
      {
        name: "summer",
      },
      {
        name: "spring",
      },
      {
        name: "fall",
      },
      {
        name: "spring",
      }
    ]);

    const products = await Product.create([
      {
        name: "summer capsule",
        description: "wear for the summer",
        price: 189.99,
        stock: 37,
        category: categories[1]._id,
      },
      {
        name: "winter capsule",
        description: "wear for the winter",
        price: 199.99,
        stock: 30,
        category: categories[0]._id,
      },
      {
        name: "fall capsule",
        description: "wear for the fall",
        image: "https://www.wardrobeoxygen.com/wp-content/uploads/2018/03/capsule-wardrobe-for-working-from-home-or-for-stay-at-home-moms-500x635.jpg",
        price: 189.99,
        stock: 25,
        category: categories[2]._id,
      },
      {
        name: "spring wear",
        description: "wear for the spring",
        price: 19.99,
        stock: 3,
        category: categories[3]._id,
      }
    ]);

    const users = await User.insertMany([
      {
        username: "bobbington",
        email: "bobbington@gmail.com",
        password: "password",
        orders: [
          {
            products: [products[0]._id, products[1]._id, products[1]._id],
          },
        ],
      },
      {
        username: "willington",
        email: "willington@gmail.com",
        password: "password1",
        orders: [
          {
            products: [products[2]._id, products[1]._id, products[1]._id],
          },
        ],
      },
      {
        username: "quan",
        email: "quanington@gmail.com",
        password: "password3",
        orders: [
          {
            products: [products[2]._id, products[2]._id, products[1]._id],
          },
        ],
      },
    ]);

    console.log("all done!");
    
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
