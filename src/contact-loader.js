const contactPage = function() {

        const wrapper = document.getElementById("content");

        const buttons = document.querySelectorAll("button");
        buttons.forEach(button => {
            button.classList.remove("toggled");
        });

        const button = document.getElementById("contact");
        button.classList.add("toggled");

        wrapper.innerHTML = "";
        wrapper.className = "";
        wrapper.classList.add("contact");
        wrapper.innerHTML = `
        <div class="contact-left-side">
            <h1 class="contact-headline">Conctact</h1>
            <div class="contact-wrapper">
                <h4>General Inquiries</h4>
                <p>totallyRealEmail@notFake.com</p>

                <h4>Head of office</h4>
                <p>st. Iosif Utkina, 6B, city Irkutsk, Russia</p>

                <h4>Hours</h4>
                <p>Mon-Fri 9:00AM — 4:00PM</p>
            </div>
        </div>
        <div class="contact-right-side">
            <h2 class="question-headline">Ask us a question</h2>
            <form action="#" method="post">
                <select name="subject" id="subject">
                    <option value="">Choose a subject</option>
                    <option value="order">Problem with order</option>
                    <option value="help">I need a help with purchase</option>
                    <option value="delivery">Delivery issue</option>
                    <option value="other">other</option>
                </select>  
                <input type="text" name="name" id="name" placeholder="Name*">
                <input type="email" name="email" id="email" placeholder="Email*">
                <input type="tel" name="phone" id="phone" placeholder="Phone*">
                <textarea name="message" id="message" placeholder="Message*"></textarea>
                <fieldset>
                    <legend>Preferred method of contact?</legend>
                    <div>
                        <input type="checkbox" name="email" id="email">
                        <label for="email">Email</label>
                    </div>
                    <div>
                    <input type="checkbox" name="phone" id="phone">
                    <label for="phone">Phone</label>
                    </div>
                </fieldset>
                <div class="button-wrapper">
                    <button type="button">Send Message</button>
                </div>
            </form>
        </div>`;

        return wrapper;
}

export default contactPage;

