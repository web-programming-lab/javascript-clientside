# JavaScript Client-Side I

Mit diesem Repository können Sie die Code- sowie Übungsbeispiele aus dem JavaScript Client-Side I lokal ausführen.

Die Ausführungsumgebung ist dabei Ihr Browser. Verwenden Sie vorzugsweise Chrome oder Firefox.

## Vorbereitung

- Installation [Visual Studio Code](https://code.visualstudio.com/download) oder [IntelliJ](https://www.jetbrains.com/idea/download) (sofern Sie das noch nicht gemacht haben)
- Installation [Node.js](https://nodejs.org/) latest LTS Version (für die Verwendung der Entwicklungswerkzeuge)
- Git Repository klonen
- NPM Dependencies installieren
  - `npm ci`
- Playground starten
  - `npm run start` oder
  - `cd playground` und `npx http-server -o -c-1 .`
- Falls sich kein Browser öffnet, öffnen Sie Ihren Browser und gehen Sie auf `http://localhost:8080`
- Es sollte `Hello Web Programming Lab 🤙` erscheinen.

## Struktur

Dieses Repository ist wie folgt strukturiert:

- `./examples`: Enthält alle im Unterricht besprochenen Code-Beispiele
- `./exercises`: Enthält alle zu lösenden Übungen
- `./playground`: Ihr zusätzliche Spielwiese welche mit `npm run start` gestartet werden kann.

## Ausführen

- Snippets oder Übungen: `cd ./[exercise ordner | example ordner] && npx http-server -o -c-1 .`
- Playground: `npm run start`

## Tooling in diesem Repository

- http-server
- Prettier
- ESLint
- [Mockapi.io](https://mockapi.io/)

## Empfohlenes Tooling

- nvm
