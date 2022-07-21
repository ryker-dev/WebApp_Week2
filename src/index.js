import "./styles.css";

const addbtn = document.getElementById("add-comment");
const deletebtn = document.getElementById("remove-comments");
const list = document.getElementById("comment-list");
const input = document.getElementById("comment-input");
const stars = document.getElementById("select-stars");

addbtn.addEventListener("click", () => {
  const div = document.createElement("div");
  div.className = "comment";

  const deleteButton = document.createElement("button");
  deleteButton.className = "remove-comment";
  deleteButton.innerHTML = "X";

  const rating = document.createElement("p");
  rating.className = "comment-rating";
  rating.appendChild(
    document.createTextNode(stars.options[stars.selectedIndex].text)
  );

  const review = document.createElement("p");
  review.className = "comment-text";
  review.appendChild(document.createTextNode(input.value));

  div.appendChild(deleteButton);
  div.appendChild(rating);
  div.appendChild(review);
  list.appendChild(div);
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
