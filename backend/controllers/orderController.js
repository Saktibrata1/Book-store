const Customer = require('../model/Customer')



const addCustomer = async (req, res, next) => {
  const { name, phone, email, address } = req.body;
  let customer;
  try {
    customer = new Customer({
      name,
      phone,
      email,
      address,
      
    });
    await customer.save();
  } catch (err) {
    console.log(err);
  }

  if (!customer) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ customer });
};




exports.addCustomer = addCustomer;
