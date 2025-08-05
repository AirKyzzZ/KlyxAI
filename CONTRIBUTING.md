# Guide de Contribution - ai.klyx.fr

Merci de votre intérêt pour contribuer au projet **ai.klyx.fr** ! Ce guide vous aidera à comprendre comment participer au développement.

## 🚀 Comment Contribuer

### 1. Fork et Clone

1. Fork le repository sur GitHub
2. Clone votre fork localement :
   ```bash
   git clone https://github.com/votre-username/ai-klyx-fr.git
   cd ai-klyx-fr
   ```

### 2. Installation

```bash
npm install
```

### 3. Configuration

1. Copier le fichier d'exemple des variables d'environnement :
   ```bash
   cp .env.example .env.local
   ```

2. Configurer vos variables d'environnement dans `.env.local`

### 4. Développement

```bash
npm run dev
```

Le projet sera accessible sur `http://localhost:3000`

## 📋 Types de Contributions

### 🐛 Signaler un Bug

1. Vérifier que le bug n'a pas déjà été signalé dans les [Issues](https://github.com/klyx-fr/ai-klyx-fr/issues)
2. Créer une nouvelle issue avec le template "Bug Report"
3. Inclure :
   - Description claire du bug
   - Étapes pour reproduire
   - Comportement attendu vs actuel
   - Captures d'écran si applicable

### 💡 Proposer une Fonctionnalité

1. Vérifier que la fonctionnalité n'a pas déjà été proposée
2. Créer une issue avec le template "Feature Request"
3. Décrire :
   - Le problème que cela résout
   - La solution proposée
   - Les cas d'usage

### 🔧 Pull Request

1. Créer une branche pour votre fonctionnalité :
   ```bash
   git checkout -b feature/nom-de-la-fonctionnalite
   ```

2. Développer votre fonctionnalité

3. Tester votre code :
   ```bash
   npm run lint
   npm run test
   npm run build
   ```

4. Commiter vos changements :
   ```bash
   git add .
   git commit -m "feat: ajouter nouvelle fonctionnalité"
   ```

5. Pousser vers votre fork :
   ```bash
   git push origin feature/nom-de-la-fonctionnalite
   ```

6. Créer une Pull Request sur GitHub

## 📝 Standards de Code

### Style de Code

- Utiliser Prettier pour le formatage
- Suivre les règles ESLint
- Utiliser des noms de variables/fonctions explicites
- Commenter le code complexe

### Messages de Commit

Utiliser le format [Conventional Commits](https://www.conventionalcommits.org/) :

```
type(scope): description

feat(auth): ajouter authentification Google OAuth
fix(editor): corriger bug dans l'éditeur WYSIWYG
docs(readme): mettre à jour la documentation
style(navbar): améliorer le design de la navigation
refactor(api): refactoriser l'API DeepSeek
test(dashboard): ajouter tests pour le tableau de bord
```

Types disponibles :
- `feat` : nouvelle fonctionnalité
- `fix` : correction de bug
- `docs` : documentation
- `style` : formatage, point-virgules manquants, etc.
- `refactor` : refactorisation
- `test` : ajout de tests
- `chore` : tâches de maintenance

### Tests

- Écrire des tests pour les nouvelles fonctionnalités
- Maintenir une couverture de code élevée
- Tester les cas d'erreur

## 🏗️ Architecture du Projet

### Structure des Composants

```
components/
├── Navbar.jsx          # Navigation principale
├── Footer.jsx          # Pied de page
├── SocialProof.jsx     # Témoignages clients
├── PlanCard.jsx        # Cartes d'abonnement
├── SiteBuilderForm.jsx # Formulaire de création
└── SiteEditor.jsx      # Éditeur WYSIWYG
```

### Structure des Pages

```
pages/
├── index.jsx           # Landing page
├── login.jsx           # Connexion/inscription
├── dashboard.jsx       # Tableau de bord
├── builder.jsx         # Générateur de site
└── editor/[siteId].jsx # Éditeur de site
```

### Utilitaires

```
lib/
├── supabaseClient.js   # Client Supabase
├── plans.js           # Définitions des plans
└── deepseekApi.js     # Wrapper API DeepSeek
```

## 🧪 Tests

### Lancer les Tests

```bash
npm run test           # Tests unitaires
npm run test:watch     # Tests en mode watch
npm run test:coverage  # Tests avec couverture
```

### Écrire des Tests

```javascript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from '../pages/index'

describe('Home Page', () => {
  test('affiche le titre principal', () => {
    render(<Home />)
    expect(screen.getByText(/Créez votre site web/i)).toBeInTheDocument()
  })
})
```

## 🚀 Déploiement

### Prérequis

- Compte Netlify
- Variables d'environnement configurées
- Base de données Supabase configurée

### Déploiement Manuel

```bash
npm run build
```

Puis déployer le dossier `.next` sur Netlify.

## 📞 Support

- **Issues GitHub** : [https://github.com/klyx-fr/ai-klyx-fr/issues](https://github.com/klyx-fr/ai-klyx-fr/issues)
- **Email** : contact@ai.klyx.fr
- **Documentation** : [docs.ai.klyx.fr](https://docs.ai.klyx.fr)

## 🙏 Remerciements

Merci à tous les contributeurs qui participent au développement d'ai.klyx.fr !

---

**Développé avec ❤️ par l'équipe Klyx.fr** 