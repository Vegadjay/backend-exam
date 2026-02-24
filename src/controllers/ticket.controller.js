import Ticket from "../schema/tickets.schema.js";
import User from "../schema/users.schema.js";

const CreateTicket = async (req, res) => {
  try {
    const {
      id,
      title,
      description,
      status,
      priority,
      created_by,
      assigned_to,
    } = req.body;

    if (!id || !title || !description || !status || !priority || !created_by) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingTicket = await Ticket.findOne({ title });
    if (existingTicket) {
      return res.status(400).json({ message: "Ticket already exists" });
    }

    const ticket = await Ticket.create({
      id: id || 1,
      title,
      description,
      status,
      priority,
      created_by,
      assigned_to,
    });

    res.status(201).json({ message: "Ticket created successfully", ticket });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const GetTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();

    res.status(200).json({ tickets });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const AssignTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const { assigned_to } = req.body;

    if (!id || !assigned_to) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const ticket = await Ticket.findByIdAndUpdate(
      id,
      { assigned_to },
      { new: true },
    );
    res.status(200).json({ message: "Ticket assigned successfully", ticket });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const StatusTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!id) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const ticket = await Ticket.findByIdAndUpdate(
      id,
      { status },
      { new: true },
    );

    return res
      .status(201)
      .json({ message: "Ticket status updated successfully", ticket });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const DeleteTicket = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const ticket = await Ticket.findByIdAndDelete(id);
    res.status(200).json({ message: "Ticket deleted successfully", ticket });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { CreateTicket, GetTickets, AssignTicket, StatusTicket, DeleteTicket };
