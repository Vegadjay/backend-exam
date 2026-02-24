import Comment from "../schema/comments.schema.js";

const CreateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { comment, user_id } = req.body;

    if (!id || !comment || !user_id) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const comment_obj = await Comment.create({
      id,
      comment,
      ticket_id: id,
      user_id,
    });
    res
      .status(201)
      .json({ message: "Comment created successfully", comment_obj });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const GetComments = async (req, res) => {
  try {
    const { id } = req.params;
    const comments = await Comment.find({ ticket_id: id });
    if (!comments) {
      return res.status(400).json({ message: "Comments not found" });
    }
    res
      .status(200)
      .json({ message: "Comments fetched successfully", comments });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const UpdateComment = async (req, res) => {
  try {
    const { comment_id } = req.params;
    const { comment } = req.body;
    if (!comment_id || !comment) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const comment_obj = await Comment.findByIdAndUpdate(
      comment_id,
      { comment },
      { new: true },
    );
    res
      .status(200)
      .json({ message: "Comment updated successfully", comment_obj });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const DeleteComment = async (req, res) => {
  try {
    const { comment_id } = req.params;
    if (!comment_id) {
      return res.status(400).json({ message: "Comment ID is required" });
    }
    const comment_obj = await Comment.findByIdAndDelete(comment_id);
    res
      .status(200)
      .json({ message: "Comment deleted successfully", comment_obj });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { CreateComment, GetComments, UpdateComment, DeleteComment };
