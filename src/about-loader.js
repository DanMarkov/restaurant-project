import restaurantImage from "./about_restaurant.jpg";

const aboutPage = function () {
    const wrapper = document.getElementById("content");

    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.classList.remove("toggled");
    });

    const button = document.getElementById("about");
    button.classList.add("toggled");

    wrapper.innerHTML = "";
    wrapper.className = "";
    wrapper.classList.add("about");
    wrapper.innerHTML = `        
    <div class="about-image-wrapper">
            <img src="${restaurantImage}" alt="A vivid tree is seen at the restaurant">
    </div>
    <div clas="about-text-wrapper">
            <h1>Our Vision</h1>
            <p>Experience the essence of coastal cuisine at KOOKIE DOOKE, 
            where the perfect blend of fresh seafood and rustic charm awaits. 
            Our restaurant's keywords are 'Seafood Heaven', 
            'Coastal Flavors', and 'Waterfront Dining'. 
            Enjoy our signature dishes, crafted with love and care, 
            as you take in the stunning sea views from our outdoor seating area. </p>
    </div>`;
}

export default aboutPage;