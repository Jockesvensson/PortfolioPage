<template>
    <div class="contact-container">
        <div id="contact" class="l-constrained">
            <h2 class="border-title"><span>KONTAKT</span></h2>
            <div class="text-container text-contact">Hör av er vid frågor/funderingar.</div>
            <div class="contact-form-container">
                <form name="contactform" method="post" action="send_form_email.php">
                    <input id="name" name="name" placeholder="Namn" type="text" required>
                    <input id="email" name="email" placeholder="Email" type="email" required>
                    <textarea id="message" name="comments" placeholder="Ditt meddelande" rows="4"></textarea>
                    <!-- <input type="submit" value="Skicka"> -->
                    <div class="contact-btn-container">
                        <button type="submit" class="submit-btn" value="Submit">SKICKA</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    data() {
        return {

        }
    },
}
</script>

<style scoped lang="scss">

.contact-container {
    background: rgb(29, 29, 29);
    border: 1px solid rgb(29, 29, 29);
}

@media only screen and (min-width: 767px) {
    #contact {
        height: 86vh;
        justify-content: center;
        align-items: center;
    }
}

.border-title {
    color: #ffffff;
}

.border-title span {
    background-color: rgb(29, 29, 29);
}

.border-title:after {
    background-color: #ffffff;
}

.text-contact {
    margin-top: 15%;
    margin-bottom: 15px;
    color: #ffffff;
}

.contact-form-container{
    padding: 0px 5%;
}

@media only screen and (min-width: 767px) {
  .contact-form-container{
    padding: 0px 25%;
  }
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

.contact-btn-container {
    text-align: right;
}

.submit-btn {
    padding: 12px 20px;
    border: none;
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
}

@media only screen and (max-width: 767px) {
    .submit-btn {
        margin-bottom: 20px;
    }
}

.submit-btn:hover {
    background-color: #45a049;
}

</style>