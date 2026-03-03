# Project Context for AI Assistants

Use **@CONTEXT.md** in new chats to load this context.

---

## FullStack_Learning – What I've Done So Far

### Project Structure
- **Js/** – JavaScript (DOM, arrays, spread/rest, functions, Drum Kit, Dice Roller, temp conversion, etc.)
- **Angular/** – Angular apps (01-starting-project, my-app, second-ng-app, third-ng-app, first-app-ngmodule)
- **Backend/** – Node.js (2.1 Using Node, 2.2 Native Modules, 2.3 NPM, 2.4 QR Code Project)
- **Practice/** – DOM Challenge, Drum Kit
- **CSS/**, **HTML/**, **Ts/** – Other learning folders
- **My Projects/** – Personal website, CV (Angela Yu course), etc.

### Angular 01-starting-project (Current)
- **Components**: `header` (header/header.component.ts), `user` (user/user.component.ts), `app`
- **Header**: task-management-logo.png, "Easy Task", gradient background
- **Fix centering**: `:host { display: block; width: 100%; }` in header.component.css
- **Fix "is not a module"**: Use `styleUrl` (singular), not `styleUrls` – Angular 17+
- **main.ts**: Only bootstraps AppComponent; do NOT import child components
- **Assets**: src/assets/ (task-management-logo.png)

### Backend
- **2.1 Using Node**: `node index.js`, console.log
- **2.2 Native Modules**: fs.writeFile, fs.readFile with `'utf8'` (avoids Buffer output)
- **2.3 NPM**: sillyname, superheros (one "o"); use require OR import, not both
- **2.4 QR Code**: inquirer, qr-image; writes to message.txt

### Key Commands
- **ng serve**: Run from Angular project folder (e.g. Angular/01-starting-project)
- **node index.js**: Run from Backend project folder
- **tsc**: Compile TypeScript from folder with tsconfig.json
- **Git**: `rm .git/index.lock` if git add fails

### Concepts Covered
- DOM: querySelector, querySelectorAll, classList, event.key
- JS: spread vs rest, for...of, getters/setters, classes
- Angular: standalone components, imports array, template vs index.html
- Node: fs, require vs import, npm packages
