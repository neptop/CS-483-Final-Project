import express from "express";
import {
    createEntry,
    getAllEntries,
    getEntryById,
    updatedEntry,
    deleteEntry,
} from "../controllers/diaryController.js";
import { ensureAuthenticated } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", ensureAuthenticated, getAllEntries);
router.post("/", ensureAuthenticated, createEntry);
router.get("/:id", ensureAuthenticated, getEntryById);
router.put("/:id", ensureAuthenticated, updatedEntry);
router.delete("/:id", ensureAuthenticated, deleteEntry);

/**
* @route GET /api/diary
* @desc Fetch all diary entries
* @access Public (Authentication will be added in Part 2)
*/
router.get("/", getAllEntries);

/**
* @route GET /api/diary/:id
* @desc Fetch a specific diary entry by ID
* @access Public (Authentication will be added in Part 2)
*/
router.get("/:id", getEntryById);

/**
* @route POST /api/diary
* @desc create a diary entry
* @access Public
*/
router.post("/", createEntry);

/**
* @route PUT /api/diary/:id
* @desc update diary entry
* @access Public
*/
router.put("/:id", updatedEntry)

/**
* @route DELETE /api/diary/:id
* @desc delete diary entry
* @access Public
*/
router.delete("/:id", deleteEntry);

export default router;