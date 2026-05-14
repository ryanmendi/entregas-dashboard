type Entrega = {
    id: number;
    nf: string;
    empresa: string;
    valor: number;
    dataSaida: string;
};

async function getEntregas(): Promise<Entrega[]> {
    
    const response = await fetch(
        "http://localhost:3000/api/entregas",
        {
            cache: "no-store",
        }
    );

        return response.json();

}

export default async function OrdersTable() {

    const entregas = await getEntregas();

    return (
        <div className="bg-white rounded-xl shadow-md p-6 mt-8">

            <h2 className="text-xl font-bold mb-4">
                Últimas Entregas
            </h2>

            <table className="w-full">
                <thead>
                    <tr className="text-left border-b">
                        <th className="py-2">Nota Fiscal</th>
                        <th className="py-2">Empresa</th>
                        <th className="py-2">Valor</th>
                        <th className="py-2">Data de Saída</th>
                    </tr>
                </thead>

                <tbody>
                    {entregas.map((entrega) => (
                        <tr key={entrega.id} className="border-b">
                            <td className="py-2">{entrega.nf}</td>
                            <td className="py-2">{entrega.empresa}</td>
                            <td className="py-2">R$ {entrega.valor.toFixed(2)}</td>
                            <td className="py-2">{new Date(entrega.dataSaida).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    );

}