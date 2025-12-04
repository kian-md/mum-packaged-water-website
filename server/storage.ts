import { type Enquiry, type InsertEnquiry } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createEnquiry(enquiry: InsertEnquiry): Promise<Enquiry>;
  getEnquiries(): Promise<Enquiry[]>;
  getEnquiry(id: string): Promise<Enquiry | undefined>;
}

export class MemStorage implements IStorage {
  private enquiries: Map<string, Enquiry>;

  constructor() {
    this.enquiries = new Map();
  }

  async createEnquiry(insertEnquiry: InsertEnquiry): Promise<Enquiry> {
    const id = randomUUID();
    const enquiry: Enquiry = {
      ...insertEnquiry,
      id,
      createdAt: new Date(),
    };
    this.enquiries.set(id, enquiry);
    return enquiry;
  }

  async getEnquiries(): Promise<Enquiry[]> {
    return Array.from(this.enquiries.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async getEnquiry(id: string): Promise<Enquiry | undefined> {
    return this.enquiries.get(id);
  }
}

export const storage = new MemStorage();
