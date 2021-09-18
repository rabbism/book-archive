const lodeData = () =>{
    const input =document.getElementById('input-text')
    const inputText = input.value;
    input.value = '';
    console.log(inputText);
    const url = `https://openlibrary.org/search.json?q=${inputText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data.docs))
}
const displayData = datas => {
    datas.forEach(element => {
        console.log(element);
        const bookDetails = document.getElementById('book-details')
        const div =document.createElement('div');
        div.classList.add('col-4');
        div.innerHTML =
        `
        <div class="card mb-3 shadow p-3 mb-5 bg-body rounded" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${lodeImage(element.cover_i)}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">${element.author_name[0]}</p>
              <p class="card-text"><small class="text-muted">${element.publish_date[0]}</small></p>
            </div>
          </div>
        </div>
      </div>      
        `
    bookDetails.appendChild(div);
        
    });
}
// Get Photo 
const lodeImage = id => {
    const url= `https://covers.openlibrary.org/b/id/${id}-M.jpg`
    return url;
}