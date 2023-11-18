//we create new book avery time submit button is hit
//we stor that new object to arry
//we loop torough the arey and despley the book

const form = document.getElementById('form');
const submit = document.getElementById('add');
const tableBody = document.querySelector('#tb');
const formValue = form.elements

const myLiberery = [];

function Book(title, author, date, read, page) {
    this.title = title;
    this.author = author;
    this.date = date;
    this.read = read;
    this.page = page;
  }

  function getFormValue(form){
    val = [];
      for (i=0; i<form.length - 2; i++){
        val.push(form[i].value)
      }
      return val
  }
  function arrytoObj(arr, obj){
    const book = new obj(arr[0], arr[1], arr[2], arr[3], arr[4])
    return book
    };





  function addBookToLibrary() {
    val = getFormValue(formValue);
    const newbook = new Book(val.elements)
    myLiberery.push(newbook);
    return myLiberery;
  }
  function rendertabl(){
    tableBody.innerHTML = '';
    myLiberery.forEach(function(book){
       const boodyHtml = `<tr>
    <th>${book.title}</td>
    <th>${book.author}</td>
    <th>${book.date}</td>
    <th>${book.page}</td>
    <th>${book.read}</td>
    <th><button>Delate</button></td>
  </tr>`
  tableBody.insertAdjacentHTML("afterbegin", boodyHtml)
    });
  };

  form.addEventListener('submit', (ev)=>{
    ev.preventDefault();
    const arr = getFormValue(formValue)
    const book = arrytoObj(arr, Book);
    myLiberery.push(book)
    console.log(myLiberery)
    rendertabl();
    //console.log(addBookToLibrary());
    //when sumit is clicked we create new book object and asign the values to the object
});

