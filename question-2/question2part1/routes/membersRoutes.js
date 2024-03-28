import  { createMember, findMemberById, findAllMember } from "../controllers/members.js";

import express from "express";

const router = express.Router();

router.get("/", findAllMember);

router.get("/:id", findMemberById);

router.post("/", createMember);

export default router;