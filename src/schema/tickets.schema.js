import mongoose from "mongoose";

const TicketSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
      autoIncrement: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
      min: 5,
    },
    description: {
      type: String,
      required: true,
      unique: true,
      min: 10,
    },
    status: {
      type: String,
      enum: ["OPEN", "IN_PROGRESS", "RESOLVED", "CLOSED"],
      default: "OPEN",
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "MEDIUM",
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    assigned_to: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

const Ticket = mongoose.model("Ticket", TicketSchema);

export default Ticket;
