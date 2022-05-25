export class dataJson {
    //stoquer
    
    localStorage.setItem('json', JSON.stringify(json));

    //  récupérer :

var user = JSON.parse(localStorage.getItem('json'));

// supprimer :

localStorage.clear();

}