let RB19Section = document.querySelector("#RB19");
let SpecsSection = document.querySelector("#Specs");
let DesignSection = document.querySelector("#Design");

let Storage = {
    RB19: [
        ShortText = "The Red Bull Racing RB19 is a Formula One car designed and constructed by Red Bull Racing competing in the 2023 Formula One World Championship.",

        FullText = "The Red Bull Racing RB19 is a Formula One car designed and constructed by Red Bull Racing competing in the 2023 Formula One World Championship. The RB19 is driven by defending world champion Max Verstappen and Sergio Pérez. The car also marks the return of Honda as a named engine supplier to Red Bull Racing and AlphaTauri, with both teams engines badged as Honda RBPT.",

        ReadMore = false
    ],

    SPECS: SpecsSection.querySelectorAll("li"),

    Design: [
        ShortText = "This year, it’s once again the sidepods that first grab the attention not through a major overhaul, but by setting new standards for how extreme they are.",

        FullText = "This year, it’s once again the sidepods that first grab the attention not through a major overhaul, but by setting new standards for how extreme they are. They feature a dramatic undercut, so much so that the design has strayed into twin-floor territory. The larger undercut increases the mass airflow (the total airflow capacity) going down the sides of the body towards the gap between the rear wheels – and it’s that flow which draws upon the diffusers and makes the underbody work harder",

        ReadMore = false
    ]
}

// Hides or Shows the text in the RB19 Section based on a boolean
function ReadMoreRB19(){
    let ReadMoreButton = RB19Section.querySelector(".ReadMoreButton");

    let Text = RB19Section.querySelector("p");

    if (Storage.RB19.ReadMore){
        Text.innerHTML = Storage.RB19[0];
        ReadMoreButton.innerHTML = "Read More";
    }
    else{
        Text.innerHTML = Storage.RB19[1];
        ReadMoreButton.innerHTML = "Read Less";
    }

    Storage.RB19.ReadMore = !Storage.RB19.ReadMore;
}

// Hides or Shows the text in the Design Section based on a boolean
function ReadMoreDesign(){
    let ReadMoreButton = DesignSection.querySelector(".ReadMoreButton");

    let Text = DesignSection.querySelector("p");

    if (Storage.Design.ReadMore){
        Text.innerHTML = Storage.Design[0];
        ReadMoreButton.innerHTML = "Read More";
    }
    else{
        Text.innerHTML = Storage.Design[1];
        ReadMoreButton.innerHTML = "Read Less";
    }

    Storage.Design.ReadMore = !Storage.Design.ReadMore;
}

// Finds the next item in the list and shows it
function FadeInSpec(index){
    let Spec = Storage.SPECS[index + 1];

    if (index == -1 || index == 0){
        Spec.style.opacity = "1";
        Spec.style.backgroundColor = "Gray";
        // Spec.scrollIntoView({behavior: "smooth"});
        return;
    }
    else if (Storage.SPECS[index - 1].style.opacity == "1"){
        Spec.style.opacity = "1";
        Spec.style.backgroundColor = "Gray";
        // Spec.scrollIntoView({behavior: "smooth"});
        return
    }
}

 let RB19CurrentImage = 0;

function CycleRB19(){
    let RB19Image = document.querySelector("#RB19-ROLL-OVER");

    let Images = [
        "Assets/images/rb191.JPG",
        "Assets/images/rb192.JPG",
        "Assets/images/rb193.JPG",
        "Assets/images/rb194.JPG",
    ]

    if (RB19CurrentImage >= Images.length) {RB19CurrentImage = 0;}
    else{
        RB19Image.src = Images[RB19CurrentImage];
        RB19CurrentImage += 1;
    }
}


// Intial
FadeInSpec(-1)

for(let i=1; i < Storage.SPECS.length; i++){
    let Spec = Storage.SPECS[i];
    Spec.style.opacity = "0";
}