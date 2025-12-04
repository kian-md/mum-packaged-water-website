import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEnquirySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Create a new enquiry
  app.post("/api/enquiries", async (req, res) => {
    try {
      const validatedData = insertEnquirySchema.parse(req.body);
      const enquiry = await storage.createEnquiry(validatedData);
      res.status(201).json(enquiry);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        console.error("Error creating enquiry:", error);
        res.status(500).json({ message: "Failed to submit enquiry" });
      }
    }
  });

  // Get all enquiries (for admin purposes)
  app.get("/api/enquiries", async (req, res) => {
    try {
      const enquiries = await storage.getEnquiries();
      res.json(enquiries);
    } catch (error) {
      console.error("Error fetching enquiries:", error);
      res.status(500).json({ message: "Failed to fetch enquiries" });
    }
  });

  // Get a single enquiry by ID
  app.get("/api/enquiries/:id", async (req, res) => {
    try {
      const enquiry = await storage.getEnquiry(req.params.id);
      if (!enquiry) {
        res.status(404).json({ message: "Enquiry not found" });
        return;
      }
      res.json(enquiry);
    } catch (error) {
      console.error("Error fetching enquiry:", error);
      res.status(500).json({ message: "Failed to fetch enquiry" });
    }
  });

  return httpServer;
}
