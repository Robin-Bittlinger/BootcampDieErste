var Buch = "Mein Name ist Seppi. Ich bin ein Hund. Mein Hund. Lol.";

function countWords(buch, gesuchtesWort){
    gesuchtesWort = gesuchtesWort.toLowerCase();
    var worte =[];
    var count = 0;
    var wordCount = 0;

    for(i=0; i<buch.length; i++){
        if(!(buch[i] == " " || buch[i] == "."))
        {
            if(worte[count] == undefined){
                worte[count] = buch[i].toLowerCase();
            }
            else
            {
                worte[count] = worte[count] + buch[i];
            }
        }
        else
        {
            count++;
        }
    }
   for(y = 0; y < worte.length; y++){
       if(worte[y] == gesuchtesWort){
           wordCount++;
       }
   }
   console.log(gesuchtesWort + " Anzahl: " + wordCount);
}

