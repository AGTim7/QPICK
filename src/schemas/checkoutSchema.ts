import { z } from "zod";

export const checkoutSchema = z
  .object({
    cardNumber: z.string().regex(/^\d{16}$/, "Введите 16 цифр номера карты"),
    expiryDate: z
      .string()
      .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Формат даты: ММ/ГГ"),
    cvv: z.string().regex(/^\d{3}$/, "Введите 3 цифры"),
  })
  .superRefine(({ expiryDate }, ctx) => {
    const [month, year] = expiryDate.split("/").map(Number);
    const now = new Date();
    const currentYear = now.getFullYear() % 100;
    const currentMonth = now.getMonth() + 1;

    if (
      year < currentYear ||
      (year === currentYear && month < currentMonth)
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["expiryDate"],
        message: "Срок действия карты истёк",
      });
    }
  });

export type CheckoutFormValues = z.infer<typeof checkoutSchema>;