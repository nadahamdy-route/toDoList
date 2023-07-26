var userInput = document.getElementById('userInput');
var items = [];
var homeContent = document.getElementById('homeContent');
var submitBtn=document.getElementById('submitBtn');
var updateBtn=document.getElementById('updateBtn');
var updatedIndex=0;
var searchInput=document.getElementById('searchInput');
var searchItemsArr=[];

if (localStorage.getItem('userItems') != null) {
    items = JSON.parse(localStorage.getItem('userItems'));
    displayItem(items);
}

function addItem() {
    items.push(userInput.value);
    localStorage.setItem('userItems', JSON.stringify(items));
    displayItem(items);
    clr();
}

function displayItem(arr) {
    var container = '';
    for (var i = 0; i < arr.length; i++) {
        container += ` <div class="home-item mb-2 px-3  text-dark mx-auto w-50 bg-white d-flex justify-content-between align-arr-center">
        <p id="x">${arr[i]}</p>
        <div>
        <i class=" fa-sharp fa-solid fa-trash px-2" onclick="deleteItem(${i})"></i>
        <i class="fa-solid fa-pen-to-square" onclick="setItemToUpdate(${i})"></i>
        </div>
    </div>`
    }
    homeContent.innerHTML = container;
}

function deleteItem(index) {
    items.splice(index, 1);
    localStorage.setItem('userItems',JSON.stringify(items))
    displayItem(items);
}

function setItemToUpdate(index)
{
    userInput.value=items[index];
    submitBtn.classList.replace('d-block','d-none');
    updateBtn.classList.replace('d-none','d-block');
    updatedIndex=index;
}

function updateItem()
{
    items[updatedIndex]=userInput.value;
    localStorage.setItem('userItems',JSON.stringify(items));
    submitBtn.classList.replace('d-none','d-block');
    updateBtn.classList.replace('d-block','d-none');
    displayItem(items);
    clr();
}
function clr()
{
    userInput.value='';
}
updateBtn.addEventListener('click',updateItem)

function searchItem()
{
    searchItemsArr=[];
   for(var i=0 ; i<items.length ; i++) 
   {
    if(items[i].includes(searchInput.value) == true )
    {
        searchItemsArr.push(items[i]);
    }
   }
 displayItem(searchItemsArr);
}

searchInput.addEventListener('input',searchItem)
