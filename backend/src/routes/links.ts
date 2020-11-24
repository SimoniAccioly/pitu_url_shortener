import { Router } from "express";

const router = Router();

router.post("/links", (request, response) => {
  response.send("POST");
});

router.get("/links/:code", (request, response) => {
  response.send("GET");
});

router.get("/links/:code/stats", (request, response) => {
  response.send("GET stats");
});

export default router;