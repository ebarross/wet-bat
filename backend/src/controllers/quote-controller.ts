import { Request, Response, Router } from "express";
import quoteService from "../services/quote-service";

const router = Router();

router.get("/quotes", async (req: Request, res: Response) => {
  try {
    const quotes = await quoteService.getQuotes();
    res.status(200).json({ quotes });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/quotes/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const quote = await quoteService.getQuoteById(id);

    if (quote) {
      res.status(200).json({ quote });
    } else {
      res.status(404).json({ error: "Quote with given id not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
