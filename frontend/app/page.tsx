import { getHealth } from "@/lib/health";

export default async function Home() {
  const health = await getHealth();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Travel App</h1>
      <p className="mt-4">
        Backend Status: <strong>{health.status}</strong>
      </p>
      <p>{health.message}</p>
    </main>
  );
}

