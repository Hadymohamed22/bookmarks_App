let bookMarks = [["google","https://www.google.com"],["yahoo","https://www.yahoo.com"],["youtube","https://www.youtube.com"],["facebook","https://www.facebook.com"],["gmail","https://www.gmail.com"]];
const tbody = document.getElementById("tbody"),
urlLink = document.getElementById("urlLink"),
urlLabel = document.getElementById("urlLabel"),
submitBtn = document.getElementById("submitBtn");

updateTable(bookMarks);

// stop send form
document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault()
})

// function to add bookmark
function add(){
    if(urlLink.value === "" || urlLabel === ""){
        alert("Enter All Data :)");
    }else{
        bookMarks.push([urlLabel.value,urlLink.value])
        urlLabel.value = "";
        urlLink.value = "";
        updateTable(bookMarks);
    }
}
document.querySelector("#submitBtn button").addEventListener("click",add);


//update data in table
function updateTable(data){
    tbody.innerHTML = '';
    let newData = data.map((e,i) => {
        return `
            <tr class="table-row">
            <td class="p-2 text-center id">${i + 1}</td>
            <td class="p-2 text-center">${e[0]}</td>
            <td class="p-2">${e[1]}</td>
            <td class="p-2">
              <div class="actions flex gap-3 justify-center items-center">
                <button
                  class="py-1 px-5 rounded-md shadow-lg transition-all duration-300 bg-main hover:bg-[#e4b23d] border border-black"
                  onClick="collect_data_to_edit(${i})"
                >
                  <i class="fa-solid fa-pen-to-square"></i>
                  <span>Edit</span>
                </button>
                <button
                  class="py-1 px-5 rounded-md text-white shadow-lg transition-all duration-300 bg-red-600 hover:bg-red-700 border border-black"
                  onClick="delete_bookmark(event,${i})"
                >
                  <i class="fa-solid fa-trash"></i>
                  <span>Delete</span>
                </button>
              </div>
            </td>
          </tr>
        `
    });
    tbody.innerHTML = newData.join(" ") 
}

// collect data to edit bookmark
function collect_data_to_edit(index){
    urlLabel.value = bookMarks[index][0];
    urlLink.value =  bookMarks[index][1];
    submitBtn.innerHTML = `
          <button
  type="submit"
  class="w-full py-3 rounded-lg bg-main transititon-all duration-300 hover:bg-[#ba8149] hover:text-white"
  onClick=(edit(${index}));
>
  Edit
</button>
    `;
}

// edit bookmark
function edit(index){
    if(urlLabel.value === "" || urlLink.value === ""){
        alert("Enter All Data");
    }else{
        bookMarks[index][0] = urlLabel.value;
        bookMarks[index][1] = urlLink.value;
        submitBtn.innerHTML = `
        <button
        type="submit"
        class="w-full py-3 rounded-lg bg-main transititon-all duration-300 hover:bg-[#ba8149] hover:text-white"
        onClick=(edit(${index}));
        >
            Add
        </button>
  `;
    urlLabel.value = "";
    urlLink.value = "";
        updateTable(bookMarks);
    }
}

// delete bookmark function
function delete_bookmark(e,index){
    let button = e.target.closest("button");
    let button_row = button.closest(".table-row")
    button_row.style.cssText = "animation: delete 2s cubic-bezier(0.7, 0, 0, 1) 0s 1 normal forwards"
    setTimeout(() => {
        bookMarks = bookMarks.filter((e,i) => i !== index);
    updateTable(bookMarks)
    }, 2000);
}