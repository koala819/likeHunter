// IDs des membres autorisés
export const AVAILABLE_TEST_IDS = [
    process.env.TEST_ID_1!,
    process.env.TEST_ID_2!
];

// Salon de test
export const TEST_CHANNEL_ID = process.env.TEST_CHANNEL_ID!;

// Trigger
export const TRIGGER = '!help';

// Messages
export const HELP_MESSAGE = `Commandes disponibles :
\`\`\`
@user + "au revoir" = kick
@user + "adieu" = ban
\`\`\`
Le message sera supprimé dans 5 secondes.`;

// Délai de suppression du message d'aide (en millisecondes)
export const HELP_MESSAGE_DELAY = 5000;