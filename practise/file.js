let url = "https://66e85302b17821a9d9dc46d7.mockapi.io/userList";
let mainDiv = document.querySelector(".main");
let table = document.querySelector(".table");
let tbody = document.querySelector(".tbody");
let btnDiv = document.querySelector(".btnDiv");
let btnTable = document.querySelector(".btnTable");

async function getUsers(){
    try{
        const response = await fetch(url);
        const data = await response.json();
        get(data); 
    }
    catch (error) {
        console.error(error);
    }
}
getUsers();

function getDivs(data){
    mainDiv.innerHTML = "";
    data.forEach((user) => {
        let box = document.createElement("div");
        let member = document.createElement("div");
        let name = document.createElement("h2");
        name.innerHTML = user.fullName;
        let phone = document.createElement("p");
        phone.innerHTML = `Phone: ${user.phone}`;
        let unite = document.createElement("div");
        unite.append(name, phone);
        let image = document.createElement("img");
        image.src = user.image;
        image.classList.add("imageCard");
        image.style.width = "50px";
        image.style.height = "50px";

        member.append(unite, image);
        member.classList.add("member");
        box.classList.add("box");
        let icons = document.createElement("div");
        let btnEdit = document.createElement("svg");
        btnEdit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="btnEdit">
        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>`;
        let btnDelete = document.createElement("svg");
        btnDelete.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="btnDelete">
        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>`;
        icons.classList.add("icons");
        icons.append(btnEdit, btnDelete);

        box.append(member, icons);
        mainDiv.appendChild(box);
    });
}

function getTables(data){
    tbody.innerHTML = "";
    mainDiv.innerHTML = "";
    data.forEach((user) => {
        let tr = document.createElement("tr");
        let tdName = document.createElement("td");
        let tdPosition = document.createElement("td");
        let tdPhone = document.createElement("td");
        let tdStatus = document.createElement("td");
        let pName = document.createElement("p");
        pName.innerHTML = user.fullName;
        pName.style.marginLeft = "10px";
        tdName.append(pName);
        tdName.classList.add("tdname");
        tdPosition.innerHTML = `<p class="posText">${user.position}</p>`;
        tdPosition.classList.add("tdpos");

        tdPhone.innerHTML = user.phone;
        tdPhone.classList.add("tdphone");
        tdStatus.innerHTML = user.status? "Active" : "Unactive";
        tdStatus.classList.add("tdstatus");
        
        let icons = document.createElement("td");
        let btnEdit = document.createElement("svg");
        btnEdit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="btnEdit">
        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>`;
        let btnDelete = document.createElement("svg");
        btnDelete.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="btnDelete">
        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>`;
        icons.append(btnEdit, btnDelete);
        tr.append(tdName, tdPosition, tdPhone, tdStatus, icons);
        tbody.appendChild(tr);
    });
}

function get(data){
    getDivs(data);
    btnDiv.onclick=()=>{
        getDivs(data);
        table.style.display="none";
    }
    btnTable.onclick=()=>{
        getTables(data);
        table.style.display="block";
    }
}
