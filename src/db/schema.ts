import { pgTable, serial, text, boolean, timestamp } from "drizzle-orm/pg-core";

export const goldSchemeEnrollments = pgTable("gold_scheme_enrollments", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  schemeType: text("scheme_type").notNull(),
  monthlyAmount: text("monthly_amount").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const jewelleryItems = pgTable("jewellery_items", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  category: text("category").notNull(),
  price: text("price"),
  imageUrl: text("image_url"),
  isVisible: boolean("is_visible").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
