/**
 * Given a text,
 * returns the number of times each word is repeated.
 */

let randomText = `Lieblinge verstehen ja im vergnugen so. Alt steilen flecken lie schonen dorthin einfach schurze. Gut brauerei sei gefallen hindurch geworden begehrte. Hast gott lied tat ers was bei. Herkommen bi im im spurenden ernsthaft es. Wei nobel leuen mager las. Ach das jahrlich sorgfalt ige aufstand. 

Lie blo zwiebel aus sie getafel glatter schwach. Etwas hab schon wer ubers ruhig tag. Karten kaffee im te regnet arbeit ri es handen ziegen. Ein zur kam wasserkrug leuchtturm uhr vielleicht. Weiterhin nebendran leuchtete he es gegenuber. Studieren sa gegenuber barbieren am im herkommen wachsamen da. Gestrigen hin ach furchtete gewachsen vergesset schwachen. 

In federdecke he bi kindlichen kuchenture dachkammer la. Richtig ihr raschen mir flo lacheln gelegen. Tur hand fing oden mirs name die arme zog ihn. Pa hellroten dammerung arbeitete uberhaupt schnupfen spurenden so. Denken an diesen te ri dieses mutter. Den verodeten ernstlich betrubtes kammertur getrunken bis unterwegs. Wu wohl zwei froh da je frei sich. 

Am frau roch karl meer zu dann gehe. Bi lachelte leichter se launigen sa. Klopfen da bildnis schones ordnung hochmut bi es besorgt. Zu wohnzimmer unsicherer betrachtet es. Launisch zitterte blattern wo pa. Ans sto preisen das geruckt hochmut standen. Ordnen um zeitig nickte he laufen te. Ernsthaft schnellen klimperte geheimnis gut sag gestrigen schreiben. 

Fu en leuchtete du verwegene nachgehen la kindliche zierliche. Pa erschrak hinunter zwischen nirgends zu en ratloses. Die fur herde abend als gehen adieu danke. Grad frau aber bis sei ruth. Langsam wahrend heiland da richten sa bedeckt leuchte wo ja. Ist lohgruben furchtete betrubtes nur sudwesten ausgeruht ausdenken. Ferne namen denen regen lag nie davon naher. Bilderbuch dir erkundigte fluchtigen aus geschwatzt zaunpfahle wie. Das besonderes vertreiben hut grashalden fur aneinander ihr. `;

function normalize(word) {
    return word.toLowerCase().replace(/.|,|!/g, "");
}


function wordRepetition(text) {
    let dict = {};
    let words = text.split(" ");

    for (let word of words) {
        if (normalize(word) in dict) {
            ++dict[normalize(word)];
        } else {
            dict[normalize(word)] = 1;
        }
    }
    console.log(dict)
}

wordRepetition(randomText);