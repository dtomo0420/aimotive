# Ha az alapul szolgáló adatkészlet sokkal (10-100 millió rekord) nagyobb lenne, szerinted alkalmas volt-e a tervezése ennek kezelésére? 
# Ha igen, miért; és ha nem, hogyan módosítaná a tervét, hogy alkalmas legyen a feladatra?

- Nincs információm arról, hogy az adatbázis normalizált adatállomány-e. Viszont érdemes megfontolni, hogy áttérjek NoSQL alapú adattárolásra. A kérdésben említett BigData feladatot, így könnyebben lehetne megoldani.

- Listázás esetén jelenleg oldalanként 100 elem jelenik meg. Ez a jelenlegi adatállomány esetén is 25 oldalt jelent. Nem életszerű, hogy a felhasználó itt böngészi a keresendő elemet. Érdemes lenne a keresést bővíteni, így a felhasználó is hamarabb megtalálná, amit keres és a rendszert sem terheljük feleslegesen.

- A kezdőlapon a legkeresettebb elemek megjelenhetnének. Akár itt egy dashboard is helyet kaphatna. Az oldal hozzáadott értéke ezzel jelentősen növekedne.

- Egy ekkora méretű adatállony már nagyobb vagyoni értékkel bír, így mindenképp érdemes lenne a felhasználók körét - akik módosíthatnak - minimalizálni. Létrehoznék két felhasználótípust: admin és user.
  - A usernek lehetősége lenne az állományt módosítani. Az általa kiadott parancsokat logolnám, illetve a módosítás előtti értékeket is megőrizném egy másik adatbázisban néhány hónapig.
  - Az adminnak lehetősége lenne userek felvételére, így csak az férhet hozzá a módosítási felülethez, akinek valóban van ott keresnivalója.