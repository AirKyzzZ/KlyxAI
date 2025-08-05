# ai.klyx.fr - Créateur de sites web propulsé par IA

**ai.klyx.fr** est une solution SaaS française permettant de créer des sites web professionnels en quelques secondes grâce à l'intelligence artificielle. Développé par Klyx.fr, ce projet cible les TPE/PME, indépendants et agences digitales en France.

## 🚀 Fonctionnalités

- **Génération instantanée** : Création de sites web complets en 30 secondes avec l'IA DeepSeek
- **Personnalisation avancée** : Éditeur WYSIWYG intuitif pour modifier le contenu
- **Hébergement inclus** : Déploiement automatique sur Netlify
- **Plans flexibles** : Freemium, Pro et Agence avec fonctionnalités adaptées
- **Solution française** : Support en français et conformité RGPD

## 🛠️ Stack Technique

- **Frontend** : Next.js 14 + React 18
- **Styling** : Tailwind CSS
- **Base de données** : Supabase (PostgreSQL)
- **Authentification** : Supabase Auth (email + Google OAuth)
- **IA** : DeepSeek API pour la génération de contenu
- **Éditeur** : TipTap pour l'édition WYSIWYG
- **Hébergement** : Netlify
- **Paiements** : Stripe

## 📁 Structure du Projet

```
klyxai/
├── components/           # Composants React réutilisables
│   ├── Navbar.jsx       # Navigation principale
│   ├── Footer.jsx       # Pied de page
│   ├── SocialProof.jsx  # Témoignages clients
│   ├── PlanCard.jsx     # Cartes d'abonnement
│   ├── SiteBuilderForm.jsx # Formulaire de création
│   └── SiteEditor.jsx   # Éditeur WYSIWYG
├── pages/               # Pages Next.js
│   ├── index.jsx        # Landing page
│   ├── login.jsx        # Connexion/inscription
│   ├── dashboard.jsx    # Tableau de bord
│   ├── builder.jsx      # Générateur de site
│   └── editor/[siteId].jsx # Éditeur de site
├── lib/                 # Utilitaires et configurations
│   ├── supabaseClient.js # Client Supabase
│   ├── plans.js         # Définitions des plans
│   └── deepseekApi.js   # Wrapper API DeepSeek
├── styles/              # Styles CSS
│   └── globals.css      # Styles globaux Tailwind
└── Configuration files
    ├── package.json     # Dépendances
    ├── next.config.js   # Configuration Next.js
    ├── tailwind.config.js # Configuration Tailwind
    ├── postcss.config.js # Configuration PostCSS
    └── netlify.toml    # Configuration Netlify
```

## 🚀 Installation et Démarrage

### Prérequis

- Node.js 18+ 
- npm ou yarn
- Compte Supabase
- Clé API DeepSeek
- Compte Stripe (pour les paiements)

### 1. Cloner le projet

```bash
git clone https://github.com/klyx-fr/ai-klyx-fr.git
cd ai-klyx-fr
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configuration des variables d'environnement

Créer un fichier `.env.local` à la racine du projet :

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=votre_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_cle_anonyme_supabase

# DeepSeek
DEEPSEEK_API_KEY=votre_cle_api_deepseek

# Stripe (optionnel pour le développement)
STRIPE_SECRET_KEY=votre_cle_secrete_stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=votre_cle_publique_stripe
```

### 4. Configuration Supabase

#### Créer les tables dans Supabase

```sql
-- Table des profils utilisateurs
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE,
  first_name TEXT,
  last_name TEXT,
  plan TEXT DEFAULT 'freemium',
  stripe_customer_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  PRIMARY KEY (id)
);

-- Table des sites web
CREATE TABLE sites (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE,
  name TEXT NOT NULL,
  sector TEXT,
  style TEXT,
  pages TEXT[],
  tone TEXT,
  description TEXT,
  html_content TEXT,
  metadata JSONB,
  status TEXT DEFAULT 'draft',
  url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  published_at TIMESTAMP WITH TIME ZONE
);

-- RLS (Row Level Security)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE sites ENABLE ROW LEVEL SECURITY;

-- Politiques pour profiles
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Politiques pour sites
CREATE POLICY "Users can view own sites" ON sites
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own sites" ON sites
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own sites" ON sites
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own sites" ON sites
  FOR DELETE USING (auth.uid() = user_id);
```

#### Configuration de l'authentification

1. Aller dans le dashboard Supabase
2. Authentication > Settings
3. Configurer les providers :
   - Email (activé par défaut)
   - Google OAuth (ajouter les credentials Google)

### 5. Configuration DeepSeek

1. Créer un compte sur [DeepSeek](https://platform.deepseek.com/)
2. Générer une clé API
3. Ajouter la clé dans `.env.local`

### 6. Lancer le projet en développement

```bash
npm run dev
```

Le projet sera accessible sur `http://localhost:3000`

## 🏗️ Déploiement sur Netlify

### 1. Préparer le projet

```bash
npm run build
```

### 2. Configuration Netlify

1. Connecter votre repository GitHub à Netlify
2. Configurer les variables d'environnement dans Netlify :
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `DEEPSEEK_API_KEY`
   - `STRIPE_SECRET_KEY`

### 3. Déploiement automatique

Le fichier `netlify.toml` configure automatiquement :
- Build command : `npm run build`
- Publish directory : `.next`
- Node version : 18

## 💳 Configuration Stripe (Optionnel)

### 1. Créer les produits dans Stripe

```bash
# Installer Stripe CLI
stripe products create --name="Pro Plan" --description="Plan Pro ai.klyx.fr"
stripe products create --name="Agence Plan" --description="Plan Agence ai.klyx.fr"
```

### 2. Créer les prix

```bash
stripe prices create --product=prod_xxx --unit-amount=2900 --currency=eur --recurring[interval]=month
stripe prices create --product=prod_yyy --unit-amount=9900 --currency=eur --recurring[interval]=month
```

### 3. Mettre à jour les IDs dans `lib/plans.js`

```javascript
stripePriceId: 'price_xxx' // Remplacer par vos IDs Stripe
```

## 🔧 Scripts Disponibles

```bash
npm run dev      # Démarrage en développement
npm run build    # Build de production
npm run start    # Démarrage en production
npm run lint     # Vérification du code
```

## 📊 Plans d'Abonnement

### Freemium (Gratuit)
- 1 site web
- Génération par IA
- Éditeur WYSIWYG basique
- Hébergement Netlify
- Sous-domaine gratuit

### Pro (29€/mois)
- 5 sites web
- Génération illimitée
- Éditeur WYSIWYG avancé
- Domaine personnalisé
- Export de code
- Support prioritaire

### Agence (99€/mois)
- Sites web illimités
- Toutes les fonctionnalités Pro
- Équipe jusqu'à 10 membres
- API d'intégration
- Support 24/7
- Formation dédiée

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

- **Email** : contact@ai.klyx.fr
- **Documentation** : [docs.ai.klyx.fr](https://docs.ai.klyx.fr)
- **Statut** : [status.ai.klyx.fr](https://status.ai.klyx.fr)

## 🙏 Remerciements

- [Klyx.fr](https://klyx.fr) - Agence web française
- [DeepSeek](https://deepseek.com) - API d'intelligence artificielle
- [Supabase](https://supabase.com) - Backend-as-a-Service
- [Netlify](https://netlify.com) - Hébergement et déploiement
- [Tailwind CSS](https://tailwindcss.com) - Framework CSS
- [Next.js](https://nextjs.org) - Framework React

---

**Développé avec ❤️ par l'équipe Klyx.fr** 