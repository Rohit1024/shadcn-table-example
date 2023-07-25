import { useState } from "react";
import { Row } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/icons";

import { paymentSchmea } from "./schema";
import DeleteDialog from "./dialogs/delete-dialog";
import ViewDialog from "./dialogs/view-dialog";
import EditDialog from "./dialogs/edit-dialog";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const [dialogContent, setDialogContent] = useState<React.ReactNode | null>(
    null
  );
  const [showDeleteDialog, setShowDeleteDialog] = useState<boolean>(false);
  const payment = paymentSchmea.parse(row.original);

  const handleViewClick = () => {
    setDialogContent(
      <ViewDialog payment={payment}/>
    );
  };

  const handleEditClick = () => {
    setDialogContent(
      <EditDialog payment={payment}/>
    );
  };

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='h-8 w-8 p-0'>
            <span className='sr-only'>Open menu</span>
            <MoreHorizontal className='h-4 w-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => navigator.clipboard.writeText(payment.id.toString())}
          >
            <Icons.copy className='mr-2 h-4 w-4' />
            Copy payment ID
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DialogTrigger asChild onClick={handleViewClick}>
            <DropdownMenuItem>
              {" "}
              <Icons.view className='mr-2 h-4 w-4' />
              View Details
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogTrigger asChild onClick={handleEditClick}>
            <DropdownMenuItem>
              <Icons.edit className='mr-2 h-4 w-4' />
              Edit Details
            </DropdownMenuItem>
          </DialogTrigger>

          <DropdownMenuItem
            onSelect={() => setShowDeleteDialog(true)}
            className='text-red-600'
          >
            <Icons.delete className='mr-2 h-4 w-4' />
            Delete Details
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {dialogContent && <DialogContent>{dialogContent}</DialogContent>}
      <DeleteDialog
        payment={payment}
        isOpen={showDeleteDialog}
        showActionToggle={setShowDeleteDialog}
      />
    </Dialog>
  );
}
