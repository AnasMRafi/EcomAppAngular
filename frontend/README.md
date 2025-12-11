# 🛒 Ecom App

A modern e-commerce application built with Angular 21.

## 📸 Screenshots

### Products Page
> Place your screenshot for `http://localhost:4200/products` below:

![Products Page](./screenshots/products-page.png)

> **Note:** To add your screenshot:
> 1. Create a `screenshots` folder in the root directory
> 2. Take a screenshot of the products page at `http://localhost:4200/products`
> 3. Save it as `products-page.png` in the `screenshots` folder

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Angular CLI (`npm install -g @angular/cli`)

### Installation

```bash
# Install dependencies
npm install

# Start the development server
ng serve
```

Navigate to `http://localhost:4200/` in your browser.

---

## 📂 Project Structure

```
ecom-app/
├── src/
│   ├── app/           # Angular components, services, etc.
│   ├── index.html     # Main HTML file
│   ├── main.ts        # Application entry point
│   └── styles.css     # Global styles
├── screenshots/       # App screenshots (create this folder)
├── angular.json       # Angular configuration
├── package.json       # Dependencies
└── README.md
```

---

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `ng serve` | Start development server |
| `ng build` | Build for production |
| `ng test` | Run unit tests |
| `ng e2e` | Run end-to-end tests |
| `ng generate component <name>` | Generate new component |

---

## 🔗 Backend Integration

This frontend connects to a separate backend service. See the **Monorepo Setup** section below for how to manage both projects.

---

## 📦 Monorepo Setup (Frontend + Backend)

If you want to push **both frontend and backend** into the **same Git repository**, you have two main approaches:

### Option 1: Simple Folder Structure (Recommended for small projects)

Reorganize your project like this:

```
my-ecom-project/
├── frontend/          # This Angular app (ecom-app)
│   ├── src/
│   ├── package.json
│   └── ...
├── backend/           # Your backend project
│   ├── src/
│   ├── pom.xml        # (if Spring Boot/Java)
│   └── ...
├── screenshots/       # Shared screenshots
├── .gitignore
└── README.md          # Root README describing both projects
```

**Steps to set this up:**

```bash
# 1. Create a new parent directory
mkdir my-ecom-project
cd my-ecom-project

# 2. Initialize git
git init

# 3. Move/copy your frontend
mv /path/to/ecom-app ./frontend

# 4. Move/copy your backend
mv /path/to/backend ./backend

# 5. Create a root .gitignore
cat > .gitignore << 'EOF'
# Node
node_modules/
dist/

# Java/Maven
target/
*.jar

# IDE
.idea/
.vscode/
*.iml

# OS
.DS_Store
EOF

# 6. Create a root README.md
# (describing both frontend and backend)

# 7. Commit and push
git add .
git commit -m "Initial commit: frontend + backend monorepo"
git remote add origin <your-repo-url>
git push -u origin main
```

---

### Option 2: Git Submodules (For independent repos)

If you want to keep frontend and backend as **separate repositories** but link them:

```bash
# In your main project
git submodule add <frontend-repo-url> frontend
git submodule add <backend-repo-url> backend
```

---

### Option 3: Keep Current Structure + Add Backend

If you want to add the backend **directly into this repo**:

```bash
# From the ecom-app directory
mkdir backend

# Copy your backend files into the backend folder
cp -r /path/to/your/backend/* ./backend/

# Update .gitignore to include backend patterns
echo "backend/target/" >> .gitignore
echo "backend/*.jar" >> .gitignore

# Commit
git add .
git commit -m "Add backend to repository"
git push
```

Your structure will look like:

```
ecom-app/
├── src/               # Angular frontend
├── backend/           # Backend code
│   ├── src/
│   └── pom.xml
├── screenshots/
└── README.md
```

---

## 📝 Additional Resources

- [Angular CLI Documentation](https://angular.dev/tools/cli)
- [Angular Official Guide](https://angular.dev)

---

## 📄 License

This project is for educational purposes.
