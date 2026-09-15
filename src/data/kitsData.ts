import { FoodKit, Benefit, Testimonial, FaqItem } from '../types';

export const WHATSAPP_CHANNEL_URL = 'https://whatsapp.com/channel/0029VbBv5G65kg7Eg0kfpj0T';

export const FOOD_KITS: FoodKit[] = [
  {
    id: 'kit-essentiel',
    name: 'Kit Essentiel Fêtes',
    tagline: 'L’indispensable généreux pour toutes les cuisines familiales.',
    badge: 'Idéal Petits Budgets & Dons',
    isPopular: false,
    idealFor: 'Familles, collaborateurs, œuvres caritatives',
    estimatedPriceRange: 'Catalogue complet sur WhatsApp',
    items: [
      'Riz Parfumé sélection supérieure (5 kg)',
      'Huile végétale raffinée pure (2 Litres)',
      'Pâtes alimentaires blé dur spaghetti (3 paquets)',
      'Boîtes de concentré de tomate double (x4)',
      'Sucre blanc raffiné en morceaux (1 kg)',
      'Lait concentré sucré en boîte (x2)',
      'Assortiment d’épices & bouillons d’assaisonnement'
    ],
    features: [
      'Conditionnement en sac scellé résistant',
      'Produits de marques certifiées de première qualité',
      'Disponible en gros et demi-gros'
    ]
  },
  {
    id: 'kit-gourmand-prestige',
    name: 'Kit Prestige Gourmand',
    tagline: 'Le grand classique festif plébiscité par les familles.',
    badge: '⭐ Le Plus Commandé',
    isPopular: true,
    idealFor: 'Familles nombreuses, primes employés, cadeaux de fin d’année',
    estimatedPriceRange: 'Détails & remises sur WhatsApp',
    items: [
      'Riz Parfumé luxe grains longs (10 kg)',
      'Bidon d’huile végétale raffinée (5 Litres)',
      'Pâtes premium tagliatelles & spaghettis (x5)',
      'Conserves de sardines à l’huile & thon entier (x6)',
      'Bocal de mayonnaise gourmande (500g)',
      'Boîte de biscuits sablés festifs & délices sucrés',
      'Jus de fruits pétillant festif sans alcool (75cl)',
      'Boîte de chocolat en poudre / Pâte à tartiner'
    ],
    features: [
      'Panier festif avec ruban or et emballage soigné',
      'Carte de vœux personnalisable incluse',
      'Tarifs préférentiels par lot de 10 kits et plus'
    ]
  },
  {
    id: 'kit-entreprise-excellence',
    name: 'Kit Excellence Entreprise & CE',
    tagline: 'Le panier de récompense VIP pour collaborateurs et partenaires.',
    badge: 'Spécial Entreprises & CSE',
    isPopular: false,
    idealFor: 'Directions, Comités d’Entreprise, fidélisation VIP',
    estimatedPriceRange: 'Devis express sur WhatsApp',
    items: [
      'Sac de Riz de luxe parfumé 1er choix (25 kg)',
      'Carton d’huile raffinée premium (x4 bouteilles)',
      'Sélection prestige de conserves fines et sauces',
      'Assortiment de boissons festives haut de gamme',
      'Coffret confiserie fine de fin d’année',
      'Café moulu d’origine & boîte de thé sélection',
      'Pack complet d’assaisonnements gastronomiques'
    ],
    features: [
      'Facturation d’entreprise officielle avec TVA',
      'Personnalisation avec logo de votre entreprise',
      'Livraison directe groupée sur votre site'
    ]
  },
  {
    id: 'kit-sur-mesure',
    name: 'Kit Sur-Mesure & Personnalisé',
    tagline: 'Composez vos kits selon votre budget exact et vos exigences.',
    badge: '100% Modulable',
    isPopular: false,
    idealFor: 'Commandes volumineuses, ONG, associations, institutions',
    estimatedPriceRange: 'Adapté à votre enveloppe budgétaire',
    items: [
      'Choix libre des grammages et variétés de riz',
      'Sélection d’huiles, conserves et produits secs',
      'Ajout possible de boissons, douceurs et extras',
      'Étiquetage aux couleurs de votre événement ou association'
    ],
    features: [
      'Accompagnement dédié par un conseiller commercial',
      'Validation d’échantillons avant production',
      'Capacité de fourniture jusqu’à 10 000 kits'
    ]
  }
];

export const CHANNEL_BENEFITS: Benefit[] = [
  {
    id: 'b1',
    title: 'Catalogues & Tarifs Détaillés',
    description: 'Recevez en temps réel les fiches techniques des kits, les compositions précises et les grilles tarifaires dégressives 2026.',
    iconName: 'FileText'
  },
  {
    id: 'b2',
    title: 'Tarifs Préférentiels & Offres Flash',
    description: 'Profitez de remises exclusives réservées aux membres de la chaîne WhatsApp lors des sessions de précommande anticipée.',
    iconName: 'Tag'
  },
  {
    id: 'b3',
    title: 'Stock Garanti Avant Rupture',
    description: 'Les denrées de fin d’année connaissent de fortes tensions de stock en décembre. Réservez à l’avance et soyez livrés à temps.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'b4',
    title: '100% Gratuit & Totalement Privé',
    description: 'Contrairement aux groupes WhatsApp, sur notre chaîne, personne ne peut voir votre numéro ni vos données personnelles.',
    iconName: 'Lock'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Serge Kouadio',
    role: 'Directeur des Ressources Humaines',
    organization: 'Groupe Logistique & BTP',
    content: 'Nous avons commandé 250 kits Prestige pour l’arbre de Noël de nos employés. La livraison était ponctuelle, les produits d’une fraîcheur irréprochable et le packaging doré a fait l’unanimité. Suivre la chaîne WhatsApp nous a permis de valider notre devis en moins de 24 heures.',
    rating: 5,
    kitsOrdered: '250 Kits Excellence'
  },
  {
    id: 't2',
    author: 'Aïcha Diallo',
    role: 'Présidente de Collectif Solidaire',
    organization: 'Association Rayon d’Espoir',
    content: 'Grâce aux annonces de promotions sur la chaîne WhatsApp, nous avons pu distribuer 400 kits alimentaires aux familles démunies pour les fêtes sans dépasser notre budget donateurs. Service d’un professionnalisme exemplaire.',
    rating: 5,
    kitsOrdered: '400 Kits Solidarité'
  },
  {
    id: 't3',
    author: 'Marcelle N.',
    role: 'Particulier & Mère de famille',
    organization: 'Abidjan',
    content: 'J’ai commandé mes kits familiaux en avance via le lien WhatsApp. Quel soulagement d’éviter la folie des marchés de fin d’année ! Tout a été livré scellé et prêt pour nos réceptions.',
    rating: 5,
    kitsOrdered: '8 Kits Prestige'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Pourquoi rejoindre la chaîne WhatsApp plutôt qu’un simple groupe ?',
    answer: 'La Chaîne WhatsApp officielle est conçue pour votre confort : elle est unidirectionnelle (vous ne recevez pas de messages intempestifs d’autres personnes) et 100% confidentielle. Votre numéro de téléphone et votre photo de profil restent totalement masqués pour les autres abonnés.'
  },
  {
    id: 'faq-2',
    question: 'Comment puis-je connaître les prix exacts des kits ?',
    answer: 'Tous les prix unitaires et grilles tarifaires dégressives (selon les quantités de 5, 20, 50, 100 kits et plus) sont publiés et mis à jour en exclusivité sur notre chaîne WhatsApp. Vous pouvez également y demander un devis personnalisé en 1 clic.'
  },
  {
    id: 'faq-3',
    question: 'Les entreprises et comités d’entreprise (CSE) reçoivent-ils une facture officielle ?',
    answer: 'Oui, absolument. Nous fournissons des factures en bonne et due forme avec toutes les mentions légales et fiscales nécessaires pour votre comptabilité d’entreprise.'
  },
  {
    id: 'faq-4',
    question: 'Comment se passe la livraison des kits alimentaires de fin d’année ?',
    answer: 'Nous assurons des livraisons sécurisées directement à votre siège d’entreprise, dans vos locaux, ou à domicile selon le planning convenu. Les dates limites de réservation sont communiquées sur la chaîne WhatsApp pour garantir zéro retard avant les festivités.'
  },
  {
    id: 'faq-5',
    question: 'Est-il possible de modifier ou personnaliser la composition d’un kit ?',
    answer: 'Tout à fait. À partir d’un volume minimum de commande, notre équipe ajuste les produits (marques de riz, volumes d’huile, douceurs festives, goodies personnalisés) pour respecter scrupuleusement votre enveloppe budgétaire.'
  }
];
