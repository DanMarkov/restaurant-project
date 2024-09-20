import restaurantImage from "./restaurant.jpg";

const homePage = function() {

        const wrapper = document.getElementById("content");

        const buttons = document.querySelectorAll("button");
        buttons.forEach(button => {
            button.classList.remove("toggled");
        });

        const button = document.getElementById("home");
        button.classList.add("toggled");

        wrapper.innerHTML = "";
        wrapper.className = "";
        wrapper.classList.add("home");
        wrapper.innerHTML = `
        <div class="image">
            <img src="${restaurantImage}" alt="An interior of the restaurant">
        </div>
        <div class="headline">
            <h1>A new restaurant will be honorably opened soon.</h1>
            <p>October 24th - Irkutsk city, Russia.</p>
        </div>`;

    return wrapper;
}

export default homePage;
