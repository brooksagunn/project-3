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
    ]);

    const products = await Product.create([
      {
        name: "summer wear",
        description: "wear for the summer",
        price: 23.99,
        stock: 3,
        category: categories[1]._id,
      },
      {
        name: "winter wear",
        description: "wear for the winter",
        price: 22.99,
        stock: 3,
        category: categories[0]._id,
      },
      {
        name: "fall wear",
        description: "wear for the fall",
        price: 18.99,
        stock: 2,
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
