import { relations } from "drizzle-orm";
import { user, session, account } from "./auth";
import { category } from "./category";
import { wallet } from "./wallet";

export const userRelations = relations(user, ({ many }) => ({
  sessions: many(session),
  accounts: many(account),
}));

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id],
  }),
}));

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id],
  }),
}));

// export const categoryRelations = relations(category, ({ one, many }) => ({
//   user: one(user, {
//     fields: [category.userId],
//     references: [user.id],
//   }),
//   transactions: many(transaction),
//   budgets: many(budget),
// }));

// export const walletRelations = relations(wallet, ({ one, many }) => ({
//   user: one(user, {
//     fields: [wallet.userId],
//     references: [user.id],
//   }),
//   transactions: many(transaction),
// }));
