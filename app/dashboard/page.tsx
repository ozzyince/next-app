import { Card } from '@/app/ui/dashboard/cards';
import { getRezCounts } from '@/app/lib/data';

export default async function Page() {
  const { Waiting, Processing, Canceled, Transferred } = await getRezCounts();

  return (
    <main>
      <h1 className="mb-4 text-xl md:text-2xl">Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Waiting" value={Waiting} type="waiting" />
        <Card title="Processing" value={Processing} type="processing" />
        <Card title="Canceled" value={Canceled} type="canceled" />
        <Card title="Transferred" value={Transferred} type="transferred" />
      </div>
    </main>
  );
}
