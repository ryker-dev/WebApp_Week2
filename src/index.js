import "./styles.css";

const addbtn = document.getElementById("add-comment");
const deletebtn = document.getElementById("remove-comments");
const list = document.getElementById("comment-list");
const input = document.getElementById("comment-input");

addbtn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  list.appendChild(li);
});

deletebtn.addEventListener("click", () => {
  if (confirm("Are you sure?")) {
    list.innerHTML = "";
  }
});

/*
document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
*/
