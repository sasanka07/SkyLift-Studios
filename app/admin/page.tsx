import { prisma } from "@/lib/prisma";

export default async function AdminPage() {
  const enquiries = await prisma.enquiry.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <h1 className="text-4xl font-bold mb-10">
        SkyLift Dashboard
      </h1>

      <div className="grid gap-6">
        {enquiries.map((item:any) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-6 shadow"
          >
            <h2 className="text-2xl font-bold">
              {item.fullName}
            </h2>

            <p>{item.email}</p>
            <p>{item.phone}</p>
            <p>{item.service}</p>
            <p>{item.budget}</p>

            <div className="mt-4 text-slate-600">
              {item.message}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}