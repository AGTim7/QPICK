import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  checkoutSchema,
  type CheckoutFormValues,
} from "../schemas/checkoutSchema";

interface Props {
  onClose: () => void;
  onComplete: () => void;
}

export function useCheckoutForm({ onClose, onComplete }: Props) {
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  });

  const submit = form.handleSubmit(() => {
    onComplete();
    onClose();
  });

  return {
    ...form,
    submit,
  };
}