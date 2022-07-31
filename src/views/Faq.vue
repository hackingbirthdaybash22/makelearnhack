<template>
    <div class="faq">
        <h1 id="header">
            <p class="red">Got&nbsp;</p>
            <p class="yellow">a&nbsp;</p>
            <p class="blue">question?</p>
        </h1>
        <form id="searchbar" class="d-flex" style="width: 60vw; margin-bottom: 2vh">
            <input id="search-input" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline" type="submit"><i class="fas fa-search"></i></button>
        </form>
        <div id="loading-spinner" class="spinner-border text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div id="questions">
            <div id="question" v-for="element in faq" :key="element.id">
                <div class="card" id="question" style="width: 60vw;margin: 0vh 10vw 2vh; text-align: left">
                    <div class="card-body">
                        <h5 class="card-title">{{ element.question }}</h5>
                        <br />
                        <p class="card-text" style="text-align: left; list-style-position: inside;"
                            v-html="element.answer">
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import questionJson from "@/assets/faq.json";

document.addEventListener("DOMContentLoaded", function () {
    const questions = document.getElementById("questions");
    const loadingSpinner = document.getElementById("loading-spinner");
    const form = document.getElementById("searchbar");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        loadingSpinner.style.display = "flex";

        let query = document.getElementById("search-input").value.toLowerCase();
        questions.innerHTML = ``; //set the div to nothing first

        const data = {
            taskDescription: '',
            outputIndicator: '',
            inputs: [query],
            examples: [{ "text": "What is a hackathon?", "label": "General" }, { "text": "How do new hackers join a hackathon?", "label": "General" }, { "text": "What do new hackers need to know about hackathons?", "label": "General" }, { "text": "What is needed to complete a hackathon project?", "label": "General" }, { "text": "What is important about building proper hacks for hackathons?", "label": "General" }, { "text": "Who is eligible to join hackathons?", "label": "General" }, { "text": "What are the skills and competencies of a good hacker?", "label": "Skills" }, { "text": "What is the quickest way to start hacking and learning how to hack?", "label": "Skills" }, { "text": "What will I get out of hacking? How will hacking benefit me?", "label": "Skills" }, { "text": "What is good hacker etiquette?", "label": "Skills" }, { "text": "What are common tools for (remote) collaboration that would be good to learn?", "label": "Skills" }, { "text": "Who is this website for?", "label": "About" }, { "text": "What is this website for?", "label": "About" }, { "text": "What made us (yes, us! the creators of this website) start hacking?", "label": "About" }, { "text": "How has our hacking journey been so far?", "label": "About" }, { "text": "How was this website built?", "label": "About" }]
        };

        fetch("https://api.cohere.ai/medium/classify", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
                Authorization: "BEARER B91Ib7p32vGGR3naEKHxavGmYb5pxexh5jaxKcLo",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                let category = data.classifications[0].prediction;

                questionJson.forEach((element) => {
                    let question = document.createElement("div");
                    question.innerHTML = `
                        <div class="card" id="question" style="width: 60vw;margin: 2vw 10vw; text-align: left">
                        <div class="card-body">
                        <h5 class="card-title">${element.question}</h5>
                        <br/>
                        <p class="card-text" style="text-align: left; list-style-position: inside;">${element.answer}</p>
                        </div>
                        </div>
                        `;
                    element.category.includes(category)
                        ? questions.appendChild(question)
                        : null;
                });
                console.log("Success:", data);
                loadingSpinner.style.display = "none";
            })
            .catch((error) => {
                loadingSpinner.style.display = "none";
                console.error("Error:", error);
            });
    });
});

export default {
    name: "FAQ",
    data() {
        return {
            faq: questionJson,
        };
    },
};
</script>

<style scoped>
.faq {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#header {
    display: flex;
    flex-direction: row;
    margin: 2vh 0vw;
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
