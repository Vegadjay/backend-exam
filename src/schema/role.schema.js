import mongoose from "mongoose";

const roleSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
      autoIncrement: true,
    },
    name: {
      type: String,
      enum: ["MANAGER", "SUPPORT", "USER"],
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Role = mongoose.model("Role", roleSchema);

export default Role;
