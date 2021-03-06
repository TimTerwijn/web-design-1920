
const jennyTalksElement = document.getElementById("speech1");
const jennyThinksElement = document.getElementById("thinking1");
const vasilisTalksElement = document.getElementById("speech2");
const vasilisThinksElement = document.getElementById("thinking2");
const thoughtPictureElement = document.getElementById("thoughtPicture");

const imageFolder = "static/img/";

function jennyTalks(story){
    hideJennyDialog();

    //stop vassilis talking
    vasilisTalksElement.classList.add("hidden");

    //add text to talk bubbel
    jennyTalksElement.firstElementChild.innerHTML = story;

    //show new talk bubbel
    jennyTalksElement.classList.remove("hidden");
}

function jennyThinks(imageUrl){
    hideJennyDialog();

    //add imgUrl to think image
    imageUrl = imageFolder + imageUrl;
    thoughtPictureElement.src = imageUrl;

    //show image
    thoughtPictureElement.classList.remove("hidden");

    //show new think bubbel
    jennyThinksElement.classList.remove("hidden");
}

function hideJennyDialog(){
    //hide prev talk bubble
    jennyTalksElement.classList.add("hidden");

    //hide prev think bubble
    jennyThinksElement.classList.add("hidden");
}

function vasilisTalks(story){
    hideVasilisDialog();

    //stop jenny talking
    jennyTalksElement.classList.add("hidden");

    //add text to talk bubbel
    vasilisTalksElement.firstElementChild.innerHTML = story;

    //show new talk bubbel
    vasilisTalksElement.classList.remove("hidden");
}

function vasilisThinks(imageUrl){
    hideVasilisDialog();

    //add imgUrl to think image
    imageUrl = imageFolder + imageUrl;
    thoughtPictureElement.src = imageUrl;

    //show image
    thoughtPictureElement.classList.remove("hidden");

    //show new think bubbel
    vasilisThinksElement.classList.remove("hidden");
}

function hideVasilisDialog(){
    //hide prev talk bubble
    vasilisTalksElement.classList.add("hidden");

    //hide prev think bubble
    vasilisThinksElement.classList.add("hidden");
}

function stopTalking(){
    //hide prev talk bubble
    jennyTalksElement.classList.add("hidden");
    vasilisTalksElement.classList.add("hidden");
}

function stopThinking(){
    //hide think balls    
    jennyThinksElement.classList.add("hidden");
    vasilisThinksElement.classList.add("hidden");

    //hide image
    thoughtPictureElement.classList.add("hidden");
}

export{
    jennyTalks,
    jennyThinks,
    vasilisTalks,
    vasilisThinks,
    stopTalking,
    stopThinking,
}