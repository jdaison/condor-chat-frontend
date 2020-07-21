const RULES = {
  user: [
    { required: true, message: "email is required", trigger: "blur" },
    { type: "email", message: "mail not valid", trigger: "blur" },
  ],
  password: [
    { required: true, message: "password is required", trigger: "blur" },
  ],
};

export default RULES;
