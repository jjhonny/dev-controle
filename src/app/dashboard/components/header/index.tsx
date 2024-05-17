import { Container } from "@/components/container";
import Link from "next/link";

export function DashboardHeader() {
  return (
    <Container>
      <header className="w-full flex items-center gap-4 bg-gray-900 my-4 p-3 rounded text-white">
        <Link className="hover:font-bold duration-300" href="/dashboard">
          Chamados
        </Link>
        <Link
          className="hover:font-bold duration-300"
          href="/dashboard/customer"
        >
          Clientes
        </Link>
      </header>
    </Container>
  );
}
