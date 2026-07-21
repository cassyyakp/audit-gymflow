

export default function PrivacyPolicy() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-200">
            <h1 className="text-3xl font-bold mb-6">Politique de Confidentialité (RGPD)</h1>
            <p className="text-sm text-gray-500 mb-8">Dernière mise à jour : Juillet 2026</p>

            <section className="space-y-6">
                <div>
                    <h2 className="text-xl font-semibold mb-2">1. Données collectées</h2>
                    <p className="mb-2">Dans le cadre de l'utilisation de GymFlow, nous collectons :</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Données d'identification : Nom, prénom, adresse e-mail.</li>
                        <li>Données de connexion : Adresses IP, logs d'accès, jetons de session (`personal_access_tokens`).</li>
                        <li>Données d'abonnement : Historique des souscriptions et formules choisies.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">2. Finalité du traitement</h2>
                    <p>Les données sont collectées pour :</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Gérer votre compte utilisateur et vos accès sécurisés à la plateforme.</li>
                        <li>Assurer le suivi de vos abonnements et réservations.</li>
                        <li>Garantir la sécurité du service et prévenir la fraude.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">3. Durée de conservation</h2>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Données de compte :</strong> Conservées pendant toute la durée d'activité du compte, puis supprimées sous 3 ans en cas d'inactivité.</li>
                        <li><strong>Logs de connexion :</strong> Conservés pendant 12 mois maximum.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">4. Vos Droits (RGPD)</h2>
                    <p className="mb-2">Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Droit d'accès, de rectification et d'effacement (droit à l'oubli).</li>
                        <li>Droit à la limitation et à l'opposition au traitement.</li>
                        <li>Droit à la portabilité de vos données.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">5. Contact & DPO</h2>
                    <p>
                        Pour exercer vos droits, vous pouvez nous contacter par e-mail à :{' '}
                        <a href="mailto:dpo@gymflow.com" className="text-orange-600 underline">dpo@gymflow.com</a> ou via votre espace client.
                    </p>
                </div>
            </section>
        </div>
    );
}