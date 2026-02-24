import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
      autoIncrement: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    roles: [
      {
        role_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Role",
          required: true,
        },
        name: {
          type: String,
          enum: ["MANAGER", "SUPPORT", "USER"],
          required: true,
        },
      },
    ],
    created_at: {
      type: Date,
      default: Date.now,
    },
    updated_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("User", UserSchema);

export default User;
