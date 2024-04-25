import { Card } from '@/app/ui/dashboard/cards';
import { getRezCounts } from '@/app/lib/data';

export default async function Page() {
  const { Waiting, Processing, Canceled, Transferred } = await getRezCounts();

  return (
    <main>
      <h2>Dashboard</h2>
      <div className="grid gap-6 md:grid-cols-4">
        <Card title="Waiting" value={Waiting} type="waiting" />
        <Card title="Processing" value={Processing} type="processing" />
        <Card title="Canceled" value={Canceled} type="canceled" />
        <Card title="Transferred" value={Transferred} type="transferred" />
      </div>
    </main>
  );
}
