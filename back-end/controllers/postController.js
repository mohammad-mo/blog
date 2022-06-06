const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Post = require('../models/postModel')

/**
 *
 * @descriptions Get user tickets
 * @route GET /api/tickets
 * @access Private
 */
const getPosts = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const posts = await Post.find({ user: req.user.id })

  res.status(200).json(posts)
})

/**
 *
 * @descriptions Get user ticket
 * @route GET /api/tickets/:id
 * @access Private
 */
// const getTicket = asyncHandler(async (req, res) => {
//   // Get user using the id in the JWT
//   const user = await User.findById(req.user.id);

//   if (!user) {
//     res.status(401);
//     throw new Error("User not found");
//   }

//   const ticket = await Ticket.findById(req.params.id);

//   if (!ticket) {
//     res.status(404);
//     throw new Error("Ticket not found");
//   }

//   if (ticket.user.toString() !== req.user.id) {
//     res.status(401);
//     throw new Error("Not authorized");
//   }

//   res.status(200).json(ticket);
// });

/**
 *
 * @descriptions Create new tickets
 * @route POST /api/tickets/
 * @access Private
 */
const createPosts = asyncHandler(async (req, res) => {
  const { title, description, photo, categories } = req.body

  if (!title || !description) {
    res.status(400)
    throw new Error('Please add a title and description')
  }

  // Get user using the id in the JWT
  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const posts = await Post.create({
    title,
    description,
    photo,
    categories,
    user: req.user.id,
    status: 'new',
  })

  res.status(201).json(posts)
})

/**
 *
 * @descriptions Delete ticket
 * @route DELETE /api/tickets/:id
 * @access Private
 */
// const deleteTicket = asyncHandler(async (req, res) => {
//   // Get user using the id in the JWT
//   const user = await User.findById(req.user.id);

//   if (!user) {
//     res.status(401);
//     throw new Error("User not found");
//   }

//   const ticket = await Ticket.findById(req.params.id);

//   if (!ticket) {
//     res.status(404);
//     throw new Error("Ticket not found");
//   }

//   if (ticket.user.toString() !== req.user.id) {
//     res.status(401);
//     throw new Error("Not authorized");
//   }

//   await ticket.remove();

//   res.status(200).json({ success: true });
// });

/**
 *
 * @descriptions Update ticket
 * @route PUT /api/tickets/:id
 * @access Private
 */
// const updateTicket = asyncHandler(async (req, res) => {
//   // Get user using the id in the JWT
//   const user = await User.findById(req.user.id);

//   if (!user) {
//     res.status(401);
//     throw new Error("User not found");
//   }

//   const ticket = await Ticket.findById(req.params.id);

//   if (!ticket) {
//     res.status(404);
//     throw new Error("Ticket not found");
//   }

//   if (ticket.user.toString() !== req.user.id) {
//     res.status(401);
//     throw new Error("Not authorized");
//   }

//   const updatedTicket = await Ticket.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     { new: true }
//   );

//   res.status(200).json(updatedTicket);
// });

module.exports = {
  getPosts,
  createPosts,
}
