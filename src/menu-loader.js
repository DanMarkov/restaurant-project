import boobaFood from "./booba_food.jpg";

const menuPage = function() {
        const wrapper = document.getElementById("content");

        const buttons = document.querySelectorAll("button");
        buttons.forEach(button => {
            button.classList.remove("toggled");
        });

        const button = document.getElementById("menu");
        button.classList.add("toggled");

        wrapper.innerHTML = '';
        wrapper.className = '';
        wrapper.classList.add('menu');
        wrapper.innerHTML = `
        <div class="left-side">
            <h2 class="menu">Menu</h2>
            <div class="menu-item">
                <h3 class="headline-menu">Shrimper’s Net Catch</h3>
                <p class="menu-item-description">Peel ‘n’ Eat Shrimp steamed in Beer.
                    $18.99

                    1 lb. Garlic $29.99

                    1/2 lb. Garlic (680 cal.)

                    Cajun (690 cal.) </p>
            </div>
        </div>
        <div class="right-side">
            <img src="${boobaFood}" alt="nice menu" class="menu-img">
        </div>`;

        return wrapper;
}

export default menuPage;