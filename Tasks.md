# Tasks Frontend Development // Prüfungstraining 2023

Bitte beachten Sie folgende Punkte:

1. Lesen Sie die Aufgaben gründlich durch. Nicht nur kurz überfliegen, dann drauf los hacken und nachher feststellen, dass die Aufgabe ganz anders gemeint war oder gar schon einen Teil der Lösung enthielt ;)

2. Mergen Sie alle Änderungen in den *Main*-Branch, denn nur den schauen wir uns an.

3. Machen Sie einen Commit pro Aufgabe.

4. Beachten Sie die Zeitschätzungen bei den Aufgaben. Diese geben Ihnen auch ein Hinweis auf die Komplexität der Aufgabe.

5. Nehmen Sie sich Zeit um die Verzeichnisstruktur und bereits gegebenen Code zu erfassen.

---

## M1: HTML auf Validität prüfen

Prüfen Sie mit dem [W3C Validator](https://validator.w3.org/nu/#textarea) ob die *index.html* valide ist. Falls nicht, passen Sie bitte die Datei entsprechend an.

**10min / HTML**


## M2: Favicon

Die Developertools melden ein fehlendes Favicon, bitte fügen Sie selbiges ein.

**5min / HTML**


## M3: Header zentrieren

Zentrieren Sie die Header Grafik und den zugehörigen Text für kleine Viewports (siehe *_stuff/layout-small.png*).

**5min / HTML**


## M4: Artikel bei «Ideen, Learnings und mehr» integrieren

Integrieren Sie die Artikel unter «Ideen, Learnings und mehr».  Schreiben Sie aussagegräftiges HTML. Das gewünschte Layout finden Sie unter *_stuff/layout-small.png*. Den Content finden Sie in *_stuff/*.

**20min / CSS & HTML**


## M5: Tabelle in «WebXR/ AR.js Capabilitiesr» integrieren

Integrieren Sie die Tabelle unter «Ideen, Learnings und mehr».  Schreiben Sie aussagegräftiges HTML. Das gewünschte Layout finden Sie unter *_stuff/*. Den Content finden Sie in *_stuff/capabilities*.

**20min / CSS & HTML**


## M6: Gestaltung der Cards anpassen

Die Cards bei «Ressourcen, Artikel und Demos» sollen in ein neues Design gebracht werden (siehe Abbildung). Versuchen Sie das neue Design möglichst genau umzusetzen. Das gewünschte Layout finden Sie unter *_stuff/*.

**15min / CSS**


## M7: Integration von Stylelint

Integrieren Sie *stylelint* via `package.json` in Ihre Prozesskette. Folgende Funktionen sollten integriert werden:

```
npm run lint:css` startet stylelint.
npm run lint:css:fix` startet stylelint und korrigiert die Fehler, sofern möglich.

``` 

**10min / Buildchain**



## O1: Responsive Table für kleine Viewports

Implementieren Sie reaktionsfähiges Verhalten für die Tabelle. Siehe 
*_stuff/capabilities.mov*.

**10min / CSS // 1 Storypoint**


## O2: Durchschuss optimieren

Erhöhen Sie den Default Durchschuss auf 130%.

**5min / CSS // 1 Storypoint**


## O3: Ausrichtung Header

Bei großen Viewports soll der Header linksbündig ausgerichtet sein (siehe *_stuff/layout-large.png*).

**5min / CSS // 1 Storypoint**


## O4: Page Navigation

Erzeugen Sie via Javascript eine Page Navigation. (siehe *_stuff/layout-large.png*).

**20min / Javascript // 3 Storypoint**


## O5: Zugänglichkeit optimieren

Optimieren Sie die Zugänglichkeit der Seite bestmöglich. Dokumentieren Sie Ihre Optimierungserfolge in der *Readme.md*.

**15min / HTML, CSS // 3 Storypoint**


## O6: Textlänge beschränken

Beschränken Sie die Textlänge für sehr große Viewports auf eine sinnvolle Breite.

**5min / CSS // 1 Storypoint**

