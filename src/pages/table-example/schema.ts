import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const paymentSchmea = z.object({
  id: z.number(),
  amount: z.number(),
  status: z.enum(["backlog", "todo", "in progress", "done", "canceled"]),
  email: z.string(),
  fullName: z.string(),
})

export type PaymentType = z.infer<typeof paymentSchmea>
