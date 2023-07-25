import TableExample from "./table-example/data";

export default function DemoPage() {
  // TODO: Add Suspense block to show Loading skeleton
  return (
    <div className='container mx-auto py-4'>
      <TableExample />
    </div>
  );
}
