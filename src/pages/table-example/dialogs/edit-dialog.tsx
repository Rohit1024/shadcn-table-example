import { z } from "zod";
import { PaymentType } from "../schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { statuses } from "../filters";
import { Button } from "@/components/ui/button";
import {
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type EditProps = {
  payment: PaymentType;
};

const editSchema = z.object({
  id: z.number(),
  fullName: z.string().min(1, { message: "Full Name Required" }),
  email: z
    .string()
    .min(1, { message: "Email is Required" })
    .email({ message: "Must be a valid Email" }),
  amount: z.number(),
  status: z.enum(["backlog", "todo", "in progress", "done", "canceled"]),
});

type editSchemaType = z.infer<typeof editSchema>;

export default function EditDialog({ payment }: EditProps) {
  const form = useForm<editSchemaType>({
    resolver: zodResolver(editSchema),
    defaultValues: {
      id: payment.id,
      fullName: payment.fullName,
      email: payment.email,
      amount: payment.amount,
      status: payment.status,
    },
  });

  function onSubmit(values: editSchemaType) {
    console.log(values);
  }
  return (
    <div>
      <DialogHeader>
        <DialogTitle>Edit Payment Details</DialogTitle>
      </DialogHeader>
      <div className="py-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-3'>
            <FormField
              control={form.control}
              name='fullName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full name</FormLabel>
                  <FormControl>
                    <Input type='text' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type='email' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='amount'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <Input type='number' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='status'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select a Status to Update' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        {statuses.map((status, index) => (
                          <SelectItem key={index} value={status.value}>
                            <span className='flex items-center'>
                              <status.icon className='mr-2 h-5 w-5 text-muted-foreground' />
                              {status.label}
                            </span>
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' className='mt-2 w-full'>
              Update Details
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
