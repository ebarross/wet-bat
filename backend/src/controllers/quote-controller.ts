import { Request, Response, Router } from "express";

const router = Router();

router.get("/quotes", async (req: Request, res: Response) => {
  res.status(200).json({ quotes: [] });
});

router.get("/quotes/:id", async (req: Request, res: Response) => {
  res.status(200).json({ quote: {} });
});

export default router;
