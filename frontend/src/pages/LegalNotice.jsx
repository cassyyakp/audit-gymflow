

export default function LegalNotice() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-200">
            <h1 className="text-3xl font-bold mb-6">Mentions Légales</h1>

            <section className="space-y-6">
                <div>
                    <h2 className="text-xl font-semibold mb-2">1. Éditeur du site & Responsable de traitement</h2>
                    <p><strong>Raison sociale :</strong> GymFlow</p>
                    <p><strong>Siège social :</strong> 123 Avenue du Sport, 75000 Paris, France</p>
                    <p><strong>Contact :</strong> contact@gymflow.com | +33 1 23 45 67 89</p>
                    <p><strong>Directeur de la publication :</strong> L'équipe Projet Groupe A</p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">2. Hébergeur</h2>
                    <p><strong>Hébergeur :</strong> Render Services, Inc.</p>
                    <p><strong>Adresse :</strong> 525 Brannan St, San Francisco, CA 94107, États-Unis</p>
                    <p><strong>Site web :</strong> <a href="https://render.com" target="_blank" rel="noreferrer" className="text-orange-600 underline">https://render.com</a></p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">3. Propriété intellectuelle</h2>
                    <p>
                        L'ensemble des éléments figurant sur GymFlow (textes, graphismes, logos, icônes, code source) sont la propriété exclusive de GymFlow, sauf mention contraire.
                    </p>
                </div>
            </section>
        </div>
    );
}