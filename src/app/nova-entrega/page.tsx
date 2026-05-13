"use client";

import { useState } from "react";

export default function NovaEntrega() {

    const [nf, setNf] = useState("");
    const [empresa, setEmpresa] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [valor, setValor] = useState("");
    const [data, setData] = useState("");

    function handleSubmit(){
        console.log({
            nf,
            empresa,
            cnpj,
            valor,
            data
        });

        alert("Entrega cadastrada");

    }

    return (
        <div className="max-w-2xl">
            <h1 className="text-3xl font-bold mb-6">
                Nova Entrega
            </h1>

            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4">
                <input type="text"
                    placeholder="Nota Fiscal"
                    className="border p-3 rounded-lg"
                    value={nf}
                    onChange={(e) => setNf(e.target.value)}
                />
                <input type="text"
                    placeholder="Empresa"
                    className="border p-3 rounded-lg"
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                />
                <input type="text"
                    placeholder="CNPJ"
                    className="border p-3 rounded-lg"
                    value={cnpj}
                    onChange={(e) => setCnpj(e.target.value)}
                />
                <input type="number"
                    placeholder="Valor"
                    className="border p-3 rounded-lg"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                />
                <input type="date"
                    placeholder="Data"
                    className="border p-3 rounded-lg"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                />

                <button
                    className="bg-gray-900 text-white p-3 rounded-lg"
                    onClick={handleSubmit}
                >
                    Cadastrar Entrega
                </button>
            </div>
        </div>
    );
}