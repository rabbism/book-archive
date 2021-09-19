// Lode data and add input value and dynmic url 
const lodeData = () =>{
    const input =document.getElementById('input-text')
    const inputText = input.value;
    spinnerTagole('block');
    input.value = '';
    console.log(inputText);
    const url = `https://openlibrary.org/search.json?q=${inputText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data.docs))
}

// Get different type of data 
const displayData = datas => {
  console.log(datas.length);
  const bookDetails = document.getElementById('book-details')
  bookDetails.textContent=' ';
  showResult(datas.length);
    datas.forEach(element => {
        // showResult(element.length);
        console.log(element);
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
    // console.log(div.length);
        
     });
  spinnerTagole('none');
}
// Get Photo 
const lodeImage = id => {
    const url= `https://covers.openlibrary.org/b/id/${id}-M.jpg`
    return url;
}
const showResult = number => {
  const showNumber =document.getElementById('result-number');
  showNumber.innerText =number;
}
// Get spneer 
const spinnerTagole = displayStyle => {
 document.getElementById('tagol-spinner').style.display =displayStyle;
//  const div =document.createElement('div');
//  div.classList.add(displayStyle);
//  div.innerHTML =`
//  <div class="text-center">
//  <div  class="spinner-border" role="status">
//    <span  class="visually-hidden">Loading...</span>
//  </div>
// </div>
 
}
