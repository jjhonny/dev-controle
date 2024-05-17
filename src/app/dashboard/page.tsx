import { Container } from "@/components/container";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { TicketItem } from "./components/ticket";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/");
  }

  return (
    <Container>
      <main className="mt-9 mb-2">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Chamados</h1>
          <Link
            className="bg-blue-500 px-4 py-2 rounded text-white"
            href="/dashboard/new"
          >
            Abrir chamado
          </Link>
        </div>

        <table className="min-w-full my-4">
          <thead>
            <tr>
              <th
                className="font-medium text-left pl-1
              "
              >
                Cliente
              </th>
              <th className="font-medium text-left hidden sm:block">
                Data cadastro
              </th>
              <th className="font-medium text-left">Status</th>
              <th className="font-medium text-left">#</th>
            </tr>
          </thead>
          <tbody>
            <TicketItem />
            <TicketItem />
          </tbody>
        </table>
      </main>
    </Container>
  );
}
