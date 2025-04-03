import React from 'react';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            {/* Cabeçalho */}
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-green-700 mb-4"> - Papel, + Digital 📲🌱</h1>
                <h2 className="text-3xl text-gray-700">🌍 Reduzindo o consumo de papel, preservando o futuro</h2>
            </div>

            {/* Seção: Impacto do Papel */}
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mb-16">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">O impacto do uso excessivo de papel</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Você já parou para pensar na quantidade de papel que utilizamos todos os dias? Seja no escritório,
                    na escola ou em casa, o consumo desnecessário de papel tem um impacto ambiental gigantesco.
                    Para produzir apenas uma folha de papel A4, são necessários cerca de <span className="font-bold">10 litros de água</span>.
                    Além disso, a indústria do papel é uma das que mais contribuem para o desmatamento e a emissão de
                    poluentes. A boa notícia? Podemos mudar esse cenário!
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Com pequenas atitudes no nosso dia a dia, é possível reduzir o desperdício e adotar alternativas mais sustentáveis.
                </p>
            </div>

            {/* Seção: Por que reduzir? */}
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mb-16">
                <h3 className="text-3xl font-bold text-green-700 mb-8 text-center">📌 Por que reduzir o consumo de papel?</h3>
                
                <div className="space-y-8">
                    <div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">🌳 1. Proteção das florestas</h4>
                        <p className="text-gray-700">
                            Milhões de árvores são cortadas anualmente para atender à demanda de papel. Optar por soluções digitais ajuda a reduzir esse impacto, preservando a biodiversidade e os ecossistemas naturais.
                        </p>
                    </div>
                    
                    <div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">💧 2. Economia de água e energia</h4>
                        <p className="text-gray-700">
                            A produção de papel consome uma quantidade absurda de água e energia. Para fabricar <span className="font-bold">1 tonelada de papel</span>, são usados em média <span className="font-bold">100.000 litros de água</span>! Imagine o impacto ambiental se reduzirmos esse consumo?
                        </p>
                    </div>
                    
                    <div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">🌱 3. Menos resíduos e poluição</h4>
                        <p className="text-gray-700">
                            O descarte de papel gera toneladas de lixo todos os anos. Além disso, os processos químicos usados na produção e na reciclagem do papel liberam poluentes que prejudicam a qualidade do ar e da água.
                        </p>
                    </div>
                    
                    <div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">📈 4. Eficiência e modernização</h4>
                        <p className="text-gray-700">
                            O mundo está cada vez mais digital. Empresas, escolas e até órgãos públicos já adotam processos 100% eletrônicos. Ao migrar para soluções digitais, ganhamos mais praticidade, reduzimos custos e tornamos nossas atividades mais eficientes.
                        </p>
                    </div>
                </div>
            </div>

            {/* Seção: Como reduzir? */}
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mb-16">
                <h3 className="text-3xl font-bold text-green-700 mb-8 text-center">💡 Como reduzir o consumo de papel no dia a dia?</h3>
                
                <div className="space-y-8">
                    <div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">🖥 1. Digitalize documentos e anotações</h4>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Utilize aplicativos de armazenamento na nuvem, como Google Drive, Dropbox e OneDrive.</li>
                            <li>Substitua cadernos e agendas por tablets, aplicativos de notas ou planners digitais.</li>
                            <li>Prefira e-books a livros físicos sempre que possível.</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">🖊 2. Evite impressões desnecessárias</h4>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Antes de imprimir, pergunte-se: “Eu realmente preciso disso no papel?”</li>
                            <li>Se precisar imprimir, use frente e verso para economizar folhas.</li>
                            <li>Opte por fontes ecológicas, como Ecofont, que economizam tinta.</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">📧 3. Prefira meios eletrônicos para comunicação</h4>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Use e-mails, mensagens e plataformas digitais em vez de correspondências físicas.</li>
                            <li>Substitua boletos e faturas impressas por <span className="font-bold">documentos digitais</span>.</li>
                            <li>Em reuniões, evite distribuir papéis. Prefira <span className="font-bold">apresentações eletrônicas</span>.</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">📜 4. Utilize assinaturas e formulários digitais</h4>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Adote <span className="font-bold">assinaturas eletrônicas</span> para evitar a impressão de contratos e documentos.</li>
                            <li>Empresas podem migrar para <span className="font-bold">notas fiscais eletrônicas (NF-e)</span> para reduzir o consumo de papel.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Seção: Benefícios */}
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mb-16">
                <h3 className="text-3xl font-bold text-green-700 mb-8 text-center">📊 Benefícios do uso de materiais digitais</h3>
                
                <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                        <span><span className="font-bold">✅ Sustentabilidade</span> – Redução do desmatamento e da poluição ambiental.</span>
                    </li>
                    <li className="flex items-start">
                        <span><span className="font-bold">✅ Praticidade</span> – Facilidade no acesso a documentos e informações.</span>
                    </li>
                    <li className="flex items-start">
                        <span><span className="font-bold">✅ Economia</span> – Redução de custos com papel, tinta e logística.</span>
                    </li>
                    <li className="flex items-start">
                        <span><span className="font-bold">✅ Organização</span> – Menos papel significa menos bagunça no escritório e em casa.</span>
                    </li>
                </ul>
            </div>

            {/* Chamada para Ação */}
            <div className="max-w-4xl mx-auto bg-green-50 p-8 rounded-lg shadow-md text-center">
                <h3 className="text-3xl font-bold text-green-700 mb-6">📢 Junte-se a essa campanha!</h3>
                <p className="text-lg text-gray-700 mb-6">
                    Cada pequena mudança no nosso comportamento pode fazer uma grande diferença para o planeta.<br />
                    Reduzir o consumo de papel é um passo essencial para um mundo mais sustentável e digital.
                </p>
                
                <div className="space-y-4">
                    <p className="text-lg font-semibold text-gray-800">
                        <span className="text-green-600">🌿 Desafio do Dia:</span> Que tal passar 24 horas sem usar papel? Faça o teste e descubra como a digitalização pode facilitar sua vida!
                    </p>
                    <p className="text-lg font-semibold text-gray-800">
                    📢 Compartilhe essa ideia e inspire mais pessoas a fazerem parte dessa transformação!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;