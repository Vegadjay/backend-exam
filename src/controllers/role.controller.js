import Role from "../schema/role.schema.js";

const CreateRole = async (req, res) => {
  try {
    const { id, name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    const existingRole = await Role.findOne({ name });
    if (existingRole) {
      return res.status(400).json({ message: "Role already exists" });
    }

    const role = await Role.create({ id: id || 1, name });

    res.status(201).json({ message: "Role created successfully", role });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const GetAllRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json({ roles });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { CreateRole, GetAllRoles };
