import express from "express";
import {
    createEntry,
    getAllEntries,
    getEntryById,
    updatedEntry,
    deleteEntry,
} from "../controllers/diaryController.js";
import authenticateJWT from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authenticateJWT, getAllEntries);
router.post("/", authenticateJWT, createEntry);
router.get("/:id", authenticateJWT, getEntryById);
router.put("/:id", authenticateJWT, updatedEntry);
router.delete("/:id", authenticateJWT, deleteEntry);

export default router;