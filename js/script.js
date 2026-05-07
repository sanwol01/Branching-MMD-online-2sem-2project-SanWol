const alleScener = document.querySelectorAll('div.scene');
const alleValgKnapper = document.querySelectorAll('.valg');
const startForfraKnapper = document.querySelectorAll('.start-forfra');

/* ----- Funktion der styrer sceneskift, den fjerner 'aktiv' fra alle scener og tænder den valgte ----*/
function visSceneViaIndex(index) {
    console.log("Prøver at vise scene nr:", index);

    // Skjul alle scener ved at fjerne 'aktiv'
    alleScener.forEach(scene => {
        scene.classList.remove('aktiv');
    });

    // Vis den valgte scene
    if (alleScener[index]) {
        alleScener[index].classList.add('aktiv');
        window.scrollTo(0, 0); // Rul op til toppen af den nye scene
    } else {
        console.error("Fejl: Kunne ikke finde div.scene med index:", index);
    }
}

/*---------   Event listeners til alle dine valg-knapper (a-tags)-----------*/

alleValgKnapper.forEach((knap, knapIndex) => {
    knap.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("Klikkede på knap index:", knapIndex);

        // Din specifikke liste over hvilken knap der fører til hvilken scene:
        switch (knapIndex) {
            case 0:  visSceneViaIndex(1);  break; // Start -> Scene 1
            case 1:  visSceneViaIndex(2);  break; // Knap 1 -> Scene 2
            case 2:  visSceneViaIndex(6);  break; // Knap 2 -> Scene 6
            case 3:  visSceneViaIndex(10); break; // Knap 3 -> Scene 10
            case 4:  visSceneViaIndex(14); break; // Knap 4 -> Scene 14
            case 5:  visSceneViaIndex(3);  break; // Knap 5 -> Scene 3
            case 6:  visSceneViaIndex(4);  break; // Knap 6 -> Scene 4
            case 7:  visSceneViaIndex(5);  break; // Knap 7 -> Scene 5
            case 8:  visSceneViaIndex(7);  break; // Knap 8 -> Scene 7
            case 9:  visSceneViaIndex(8);  break; // Knap 9 -> Scene 8
            case 10: visSceneViaIndex(9);  break; // Knap 10 -> Scene 9
            case 11: visSceneViaIndex(11); break; // Knap 11 -> Scene 11
            case 12: visSceneViaIndex(12); break; // Knap 12 -> Scene 12
            case 13: visSceneViaIndex(13); break; // Knap 13 -> Scene 13
            case 14: visSceneViaIndex(15); break; // Knap 14 -> Scene 15
            case 15: visSceneViaIndex(16); break; // Knap 15 -> Scene 16
            case 16: visSceneViaIndex(17); break; // Knap 16 -> Scene 17
          
            default:
                console.warn("Ingen rute defineret for knap index:", knapIndex);
        }
    });
});

/*-----------Event listeners til alle 'start-forfra' knapper -------------- */

startForfraKnapper.forEach(knap => {
    knap.addEventListener('click', (e) => {
        e.preventDefault();
        visSceneViaIndex(0); // Går altid tilbage til allerførste scene
    });
});
