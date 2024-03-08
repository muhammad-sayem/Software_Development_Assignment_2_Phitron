const loadAllData = () => {
    fetch("https://openapi.programming-hero.com/api/videos/category/1000")
        .then(res => res.json())
        .then(data => displayData(data.data))
}

const secToHourMin = (value) => {
    const hours = parseInt(value/3600);
    const minutes = parseInt((hours%3600)/60);

    if(hours != 0 || minutes != 0) {
        return `${hours} hours ${minutes} minutes ago`;
    }
    else{
        return "";
    }
}

const displayData = (data) => {
    const contentContainer = document.getElementById("content-container");
    
    contentContainer.innerHTML = "";

    if(data.length > 0){
        data.forEach(item => {
            console.log(item);
            
            const card = document.createElement("div");
            card.classList.add("col-lg-3");
            card.innerHTML = `
            <div class = "container mt-5">

                <div class = "card-thumbnail container">
                    <img class = "thumbnail-img" src="${item.thumbnail}" alt="">
                    <p class = "watch-time">${secToHourMin(item.others.posted_date)}</p>
                    
                </div>

                <div class = "card-all mt-3 container">
                    <div class = "card-pic">
                        <img class = "card-pro-pic" src="${item.authors[0].profile_picture}" alt="">
                    </div>

                    <div class = "card-pic-info">
                        <h5>${item.title}</h5>
                        <p>${item.authors[0].profile_name}</p>
                        <p>${item.others.views} Views</p>
                    </div>
                </div>     
            </div>
            `;
            contentContainer.appendChild(card);
        });
    }
    
    else{
        const temp = document.createElement("div");
        temp.innerHTML = `

        <div class = "drawing-container text-center mt-5">
            <img class = "drawing-image" src="Images/cross.png" alt="">
            <h1> Oopss!! Sorry, There is no <br> content here </h1>
        </div>
        
        `;
        contentContainer.appendChild(temp);
    }
}

loadAllData();


const loadMusicData = () => {
    fetch("https://openapi.programming-hero.com/api/videos/category/1001")
        .then(res => res.json())
        .then(data => displayData(data.data))
}

const loadComedyData = () => {
    fetch("https://openapi.programming-hero.com/api/videos/category/1003")
        .then(res => res.json())
        .then(data => displayData(data.data))
}

const loadDrawingData = () => {
    fetch("https://openapi.programming-hero.com/api/videos/category/1005")
        .then(res => res.json())
        .then(data => displayData(data.data))
}

const sortByView = () => {
    fetch("https://openapi.programming-hero.com/api/videos/category/1000")
        .then(res => res.json())
        .then(data => sorting(data.data));
}

const sorting = (data) => {
    data.sort((a, b) => parseFloat(b.others.views) - parseFloat(a.others.views));
    displayData(data);
}