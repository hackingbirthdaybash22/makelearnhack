<template>
    <div class="faq">
        <h1>FAQ</h1>
        <div id="loading-spinner" class="spinner-border text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div id="questions"></div>
    </div>
</template>

<script>
import questionJson from "@/assets/faq.json";

document.addEventListener("DOMContentLoaded", function () {
    const questions = document.getElementById("questions");
    questionJson.forEach((element) => {
        let question = document.createElement("div");
        question.innerHTML = `
        <div class="card" id="question" style="width: 60vw;margin: 2vw 10vw;padding: 4%;">
        <h5 class="card-title">${element.question}</h5>
        <p class="card-text" style="text-align: left; list-style-position: inside;">${element.answer}</p>
        </div>
        `;
        questions.appendChild(question);
    });
});

export default {
    name: "FAQ",
};
</script>

<style scoped>
.faq {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.red {
    color: rgba(231, 52, 39, 1);
}

.yellow {
    color: rgba(248, 185, 42, 1);
}

.blue {
    color: rgba(29, 83, 159, 1);
}

#loading-spinner {
    display: none;
    margin-right: 5px;
}

</style>
