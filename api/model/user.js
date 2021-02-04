const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const newSchema = new Schema({
  email: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    default: "",
  },
  fristname:{
    type: String,
    default: "",
  },
lastname:{
  type: String,
  default: "",
},
address:{
  type: String,
  default: "",
},
town:{
  type: String,
  default: "",
},
phone:{
  type: String,
  default: "",
},
postcode:{
  type: String,
  default: "",
},
confirmpassword:{ type: String,
  default: "",}

});
newSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
newSchema.methods.validpassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
const Userdata = mongoose.model("shop", newSchema);
module.exports = Userdata;
