
const row = document.createElement("div");
row.classList.add("row");
row.innerHTML = "<h2>Adoptadog Blog</h2>";
document.querySelector("main").appendChild(row);

const blogContainer = document.createElement("div");
blogContainer.classList.add("blog-container");
blogContainer.classList.add("row");
document.querySelector("main").appendChild(blogContainer);

const container1 = document.createElement("div");
container1.classList.add("container1");
blogContainer.appendChild(container1);

const blogImg = document.createElement("div");
blogImg.classList.add("blog-img");
container1.appendChild(blogImg);
const blogPosts = [
  {
    headline: "Traveling With Your Dog",
    image: "images/blog-1.jpg",
    text: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat."
  },
  {
    headline: "How to Walk Multiple Dogs",
    image: "images/blog-2.jpg",
    text: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non rept"
  },
  {
    headline: "Teach Your Dog To Fetch",
    image: "images/blog-3.jpg",
    text: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat."
  }
];

const generateBlogPosts = () => {
  blogPosts.forEach((post) => {
    const container1 = document.createElement("div");
    container1.classList.add("container1");
    blogContainer.appendChild(container1);

    const blogImg = document.createElement("div");
    blogImg.classList.add("blog-img");
    container1.appendChild(blogImg);

    const img = document.createElement("img");
    img.classList.add("dog-pic");
    img.src = post.image;
    img.alt = post.headline;
    blogImg.appendChild(img);

    const blogSquare = document.createElement("div");
    blogSquare.classList.add("blog-square");
    container1.appendChild(blogSquare);

    const headline = document.createElement("h3");
    headline.innerText = post.headline;
    blogSquare.appendChild(headline);

    const text = document.createElement("p");
    text.innerText = post.text;
    blogSquare.appendChild(text);
  });
};

generateBlogPosts();
