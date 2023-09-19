const MOCK_ITEMS = JSON.parse(localStorage.getItem("items")) || [];

class OlxItem {
  id;
  name;
  price;
  image;
  postedDate;
  postedBy;
  location;

  constructor(name, price, image, location, postedBy, postedDate) {
    this.id = Math.random();
    this.name = name;
    this.price = price;
    this.image = image;
    this.location = location;
    this.postedBy = postedBy;
    this.postedDate = postedDate;
  }
}
// for (let i = 0; i < 100; i++) {
//   MOCK_ITEMS.push(
//     new olxItem(
//       "Dell XPS " + (i + 1),
//       70000,
//       "https://img5.gadgetsnow.com/gd/images/products/additional/large/G239952_View_1/computer-laptop/laptops/dell-inspiron-3501-d560412win9s-laptop-11th-generation-i5-1135g7-integrated-8gb-1tb-hdd-256gb-ssd-windows-10.jpg",
//       "Pedakallepalli",
//       "Jyothi Babu Araja",
//       new Date()
//     )
//   );
//}
console.log(MOCK_ITEMS);

function addItems(event) {
  const root = document.getElementById("items");
  MOCK_ITEMS.forEach(function (item, i) {
    const div = createItem(item, i);
    root.appendChild(div);
  });
}

function createItem(item, i) {
  const div = document.createElement("div");
  div.classList.add("list");

  const anchor = document.createElement("a");
  anchor.setAttribute("href", `/item.html?id=${i}`);

  div.appendChild(anchor);

  const img = document.createElement("img");
  img.setAttribute("src", item.image);

  const price = document.createElement("p");
  price.innerHTML = item.price;

  const name = document.createElement("p");
  name.innerHTML = item.name;

  const location = document.createElement("p");
  location.innerHTML = item.location;

  anchor.append(img, price, name, location);
  return div;
}
function displayItems(item) {
  const imgwrap = document.createElement("div");
  imgwrap.classList.add("imgwrap");
 
  
  const imges = document.createElement("div");

  imges.classList.add("imges");
  const img = document.createElement("img");
  img.setAttribute("src", item.image);
  const description = document.createElement("p");
  description.innerHTML = "Description Cash on delivery available";

  const imageinfo = document.createElement("div");

  imageinfo.classList.add("imginfo");
  const nameel = document.createElement("div");
  nameel.classList.add("nameel");
  const name = document.createElement("p");
  name.innerHTML = item.name;
  const button = document.createElement("button");
  button.innerHTML = "chat With cellers";

  const price = document.createElement("p");
  price.innerHTML = item.price;

  const location = document.createElement("p");
  location.innerHTML = item.location;
  location.classList.add("location");

  nameel.append(name, button);

  imges.append(img, description);
  imageinfo.append(nameel, price, location);
  imgwrap.append(imges, imageinfo);
  return imgwrap;
}
