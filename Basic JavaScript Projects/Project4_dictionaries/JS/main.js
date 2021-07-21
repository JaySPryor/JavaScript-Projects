/* DICTIONARIES */

//Basic Dictionary
function creature_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labradore",
        Age:5,
        Sound:"Bark!"
    };
    //Un-Comment to delete sound value from dictionary
    /*delete Animal.Sound;*/
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

