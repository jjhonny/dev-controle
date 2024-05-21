import { Container } from "@/components/container";
import Link from "next/link";

export default function NewTicket() {
  return (
    <Container>
      <main className="mt-9 mb-2">
        <div className="flex items-center gap-3">
          <Link
            className="bg-gray-900 px-4 py-2 text-white rounded hover:bg-gray-700"
            href="/dashboard/customer"
          >
            Voltar
          </Link>
          <h1 className="text-3xl font-bold">Novo Chamado</h1>
        </div>
        <form className="flex flex-col mt-6">
          <label className="mb-1 font-medium text-lg">Nome do chamado:</label>
          <input
            className="w-full border-2 rounded-md px-2 mb-2 h-11"
            type="text"
            placeholder="Digite o nome do chamado"
            required
          />
          <label className="mb-1 font-medium text-lg">
            Descreva o problema:
          </label>
          <textarea
            className="w-full border-2 rounded-md p-2 mb-2 h-24 resize-none"
            placeholder="Descreva o problema"
            required
          ></textarea>
          <label className="mb-1 font-medium text-lg">
            Selecione o cliente:
          </label>
          <select className="w-full border-2 rounded-md p-2 mb-2 h-11 bg-white">
            <option value="cliente1">Cliente 1</option>
          </select>
        </form>
      </main>
    </Container>
  );
}
