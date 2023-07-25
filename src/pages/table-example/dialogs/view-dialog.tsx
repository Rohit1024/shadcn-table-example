import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PaymentType } from "../schema";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type ViewProps = {
  payment: PaymentType;
};

export default function ViewDialog({ payment }: ViewProps) {
  const entries = Object.entries(payment);
  return (
    <DialogHeader>
      <DialogTitle>View Payment Details</DialogTitle>
      <DialogDescription className='py-4'>
        <Table className="border-2">
          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead>Key</TableHead>
              <TableHead>Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {entries.map(([key, value], index) => (
              <TableRow key={index}>
                <TableCell>{key}</TableCell>
                <TableCell>{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogDescription>
    </DialogHeader>
  );
}
