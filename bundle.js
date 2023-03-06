async function comicDownload() {
    // Get the email from the query string
    const params = new URLSearchParams({
        email: "d.igolinskiy@innopolis.university",
    }); // Fetch the ID from the Innopolis API
    const response1 = await fetch(`https://fwd.innopolis.app/api/hw2?${params}`);
    const json1 = await response1.json();
    const paramsID = new URLSearchParams({
        num: json1,
    });
    const response2 = await fetch(`https://getxkcd.vercel.app/api/comic?${paramsID}`);
    const data = await response2.json();
    // Display the comic on the page
    const comicImg = new Image();
    const title = document.getElementById("title");
    const date = document.getElementById("date");
    const imageContainer = document.getElementById("imageContainer");
    comicImg.src = data.img;
    comicImg.alt = data.alt;
    title.textContent = data.title;
    date.textContent = new Date(data.year, data.month - 1, data.day).toLocaleDateString();
    comicImg.onload = () => {
        imageContainer.appendChild(comicImg);
    };
}
comicDownload();
const button = document.getElementById("updateComic");
button.addEventListener("click", comicDownload);
