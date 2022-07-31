<template>
  <h1>Simple Pipeline</h1>
  <p>
    This is a simple pipeline to guide you through your first Hackathon! Collect
    badges and learn the simple steps to completing your first hackathon
  </p>

  <ul class="pagination d-flex justify-content-center flex-row">
    <li
      v-if="currentStep != 1"
      class="page-item page-link"
      @click="currentStep--"
    >
      <span aria-hidden="true">&laquo;</span>
    </li>
    <li class="page-item page-link" @click="currentStep = 1">1</li>
    <li class="page-item page-link" @click="currentStep = 2">2</li>
    <li class="page-item page-link" @click="currentStep = 3">3</li>
    <li class="page-item page-link" @click="currentStep = 4">4</li>
    <li class="page-item page-link" @click="currentStep = 5">5</li>
    <li class="page-item page-link" @click="currentStep = 6">6</li>
    <li class="page-item page-link" @click="currentStep = 7">7</li>
    <li class="page-item page-link" @click="currentStep = 8">8</li>
    <li
      v-if="currentStep != 8"
      class="page-item page-link"
      @click="currentStep++"
    >
      <span aria-hidden="true">&raquo;</span>
    </li>
  </ul>

  <div class="row mb-3">
    <div class="col-md-4 sidebar">
      <PipelineProgress
        :progressValue="currentStep"
        :currentBadges="currentBadges"
      />
    </div>
    <div class="col-md-8 column">
      <div class="row">
        <h5>Step {{ currentStep }}</h5>
        <p>
          {{ stepsData[currentStep - 1].stepTitle }}
        </p>
      </div>
      <div class="row">
        <div
          class="col-md-6 g-4"
          v-for="step in stepsData[currentStep - 1].stepCards"
          :key="step.cardTitle"
        >
          <InfoBlock
            :sectionTitle="step.cardTitle"
            :sectionText="step.cardText"
            :sectionBadge="step.cardItem"
            :currentBadges="currentBadges"
            @itemSaved="updateItems($event)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PipelineProgress from "@/components/PipelineProgress.vue";
import InfoBlock from "@/components/InfoBlock.vue";

// eslint-disable-next-line no-unused-vars
const stepsData = [
  {
    stepNum: 1,
    stepTitle: "Create your team",
    stepCards: [
      {
        cardTitle: "About working solo",
        cardText:
          "Working solo in hackathon, especially for your first time, is a bit of a challenge.",
        cardItem: "soloBadge",
        cardSize: 1,
      },
      {
        cardTitle: "About working in a team",
        cardText:
          "Working in a team is a fun way to meet new people, and has its own pros and cons.",
        cardItem: "teamBadge",
        cardSize: 1,
      },
      {
        cardTitle: "Setting up for solo hacks",
        cardText:
          "Running solo means having to keep track of your own timelines, and figuring things out on your own, but it's also a good way to get your first taste of the hackathon.",
        cardItem: "",
        cardSize: 1,
      },
      {
        cardTitle: "Setting up for team hacks",
        cardText:
          "Establishing communication channels and working out shcedules for teams, especially multi-national teams from different time zones is important for keeping track of progress in hackathons.",
        cardItem: "",
        cardSize: 1,
      },
      {
        cardTitle: "Pros of working solo",
        cardText:
          "Working solo gives you full control over the direction of your project, and avoids the drama of working with randomm teammates, which may be preferable for first time hackers.",
        cardItem: "",
        cardSize: 1,
      },
      {
        cardTitle: "Pros of working in teams",
        cardText:
          "Working in teams gives you the opportunity to meet new people, and to learn from their shared experiences. Working in teams splits the workload, and you can help each other when you get stuck.",
        cardItem: "",
        cardSize: 1,
      },
      {
        cardTitle: "Cons of working solo",
        cardText:
          "Working alone means you have to figure things out on your own, and you have to be careful to not overplan your hack.",
        cardItem: "",
        cardSize: 1,
      },
      {
        cardTitle: "Cons of working in teams",
        cardText:
          "Working in teams can be tricky especially if you are unfamiliar with your teammates, and communication or scheduling issues might interrupt your progress.",
        cardItem: "",
        cardSize: 1,
      },
      
    ],
  },
  {
    stepNum: 2,
    stepTitle: "Fill your ideation template",
    stepCards: [
      {
        cardTitle: "What is an ideation template",
        cardText:
          "An ideation template is a framework for you to plan your hack. Our template is one we made as a quick start after over 40 hackathons cumulative experience between us, refined over the many hackathons. Check out our template here: <a href='https://docs.google.com/document/d/10DVAemBxJiMuTWgauTRXdxm9gvnxsSg4jlca2h-8CdY/edit#heading=h.h5kznaebdxa'>Ideation Template</a>",
        cardItem: "templateBadge",
        cardSize: 2,
      },
      {
        cardTitle: "Why is an ideation template important",
        cardText:
          "Having proper planning, documentation and task management, is important to ensure that you complete your hack on schedule, regardless of whether you are working in teams or solo.",
        cardItem: "",
        cardSize: 2,
      },
    ],
  },
  {
    stepNum: 3,
    stepTitle: "Brainstorming",
    stepCards: [
      {
        cardTitle: "How to brainstorm",
        cardText:
          "Coming up with a good idea right off the bat almost never happens in real life. Taking the time to explore the theme and all the topics or issues around the theme can lead you towards an idea that works for you. We like to brainstorm on a google doc with bulleted lists, to help explore the themes and topics in depth.",
        cardItem: "brainstormBadge",
        cardSize: 2,
      },
      {
        cardTitle: "Brainstorming in teams",
        cardText:
          "When brainstorming in teams, be sure to have everyone come up with some ideas, and don't forget to set a timer so it doesn't take too long!",
        cardItem: "",
        cardSize: 1,
      },
      {
        cardTitle: "Brainstorming solo",
        cardText:
          "Do your research on the theme, Google theme keyords to find inspiration to see where this hack will take you.",
        cardItem: "",
        cardSize: 1,
      },
    ],
  },
  {
    stepNum: 4,
    stepTitle: "Finalizing on an idea",
    stepCards: [
      {
        cardTitle: "Process of elimination",
        cardText:
          "Sometimes we end up with a lot of ideas. One way we pick which one to work on is by process of elimination, working backwards to find the ideas that we are least unwilling to work on.",
        cardItem: "",
        cardSize: 1,
      },
      {
        cardTitle: "Spin the wheel",
        cardText:
          "Sometimes when we cannot make a decision, or are taking more than a couple hours on ideation, we end up using the spin the wheel method to select our final idea.",
        cardItem: "",
        cardSize: 1,
      },
      {
        cardTitle: "Sticking to your selected idea",
        cardText:
          "Once you have selected your idea, you must stick to it and work on it. This is the best way to ensure that you are on track to complete your hack. Trust the process and see it through.",
        cardItem: "",
        cardSize: 2,
      },
    ],
  },
  {
    stepNum: 5,
    stepTitle: "Task management",
    stepCards: [
      {
        cardTitle: "Tasks management solo",
        cardText:
          "When managing tasks solo, prioritization is key. For example, you may want to prioritize the functionality of the project rather than the look and feel to ensure you have something that works at the end of the hackathon.",
        cardItem: "",
        cardSize: 2,
      },
      {
        cardTitle: "Tasks management in teams",
        cardText:
          "Distributing the tasks and playing to your team members strengths is key. Using task management like Github's Projects boards can be useful to track progress and ensure everyone is on task.",
        cardItem: "",
        cardSize: 2,
      },
    ],
  },
  {
    stepNum: 6,
    stepTitle: "Github",
    stepCards: [
      {
        cardTitle: "Setting up and organization",
        cardText:
          "Typically, we have found that keeping hackathon repositories in Github organizations helps to keep things neat, especially if you plan to do many hackathons in the long run.",
        cardItem: "",
        cardSize: 1,
      },
      {
        cardTitle: "Setting up a repository",
        cardText:
          "Set up a repository to save your work. Github is an incredible version control tool to help you keep track of your work. You can use Github to share your work with the community, and to collaborate with other hackers.",
        cardItem: "githubBadge",
        cardSize: 1,
      },
      {
        cardTitle: "Github Pages",
        cardText:
          "Github pages is a great way to set up user guides, documentation, or even host your project!",
        cardItem: "",
        cardSize: 1,
      },
      {
        cardTitle: "Github Projects",
        cardText:
          "Github Projects is an excellent task managemetn system to help you plan your time and prioritize your tasks, especially working in groups!",
        cardItem: "",
        cardSize: 1,
      },
    ],
  },
  {
    stepNum: 7,
    stepTitle: "Coding and Deploymeny",
    stepCards: [
      {
        cardTitle: "Editors IDE",
        cardText:
          "We like to use Visual Studio code, a simple editor easy for beginners to use.",
        cardItem: "codingBadge",
        cardSize: 1,
      },
      {
        cardTitle: "Learning to Google",
        cardText:
          "At the heart of hacking is asking questions. Questions about what we can build, how we can build it, and how we can make it better. Learning to Google, or in otherwords learning to ask questions, is an invaluable skill for hackathons and beyond",
        cardItem: "",
        cardSize: 1,
      },
      {
        cardTitle: "Online editors",
        cardText:
          "If you don't want to download an editor environment for your first hack, there are also online options like Replit and codesandbox to build your project.",
        cardItem: "",
        cardSize: 1,
      },
    ],
  },
  {
    stepNum: 8,
    stepTitle: "Submission",
    stepCards: [
      {
        cardTitle: "How to make a write up",
        cardText:
          "Most hackathons use Devpost as their submission platform, which requires a write up of your project. Devpost comes with a default template you can use to talk about your hack, which you can ffind when you start a new project for submission.",
        cardItem: "devpostBadge",
        cardSize: 1,
      },
      {
        cardTitle: "Add images and emojis",
        cardText:
          "Spice up your write up with Emojis and fun Github Markdown formatting to draw attention to the most important sections! You can check out our devpost write-up for inspiration!",
        cardItem: "",
        cardSize: 1,
      },
      {
        cardTitle: "Record a video",
        cardText:
          "While not all hackathons require a demo video submission, we highly reccomend it! As the software changes and evolves, some older projects may stop worknig after a while. A demo video serves as a record of how your hack was intended to work when you developed it. Do upload your videos early before the deadline!",
        cardItem: "demoBadge",
        cardSize: 1,
      },
      {
        cardTitle: "Video recording software",
        cardText:
          "If you've never recorded a demo before, fret not! There's plenty of free software for recording and editing. Our favourites are Obs for screen recording, and windows video editor for easy editing!",
        cardItem: "",
        cardSize: 1,
      },
      {
        cardTitle: "Sharing your work",
        cardText:
          "Once you have completed your hack, you can share your work with the community. You can share your work with the community by uploading your project to Github, or by sharing your project on social media. Take pride of your work!",
        cardItem: "",
        cardSize: 1,
      },
    ],
  },
];

export default {
  name: "SimplePipline",
  components: {
    PipelineProgress,
    InfoBlock,
  },
  methods: {
    updateItems(x) {
      if (!this.currentBadges.includes(x)) {
        this.currentBadges.push(x);
      }
      console.log(this.currentBadges);
    },
  },

  data() {
    return {
      stepsData: stepsData,
      sectionTitle: "Hackathon Info",
      currentStep: 1,
      currentBadges: [],
    };
  },
};
</script>

<style scoped>
.sidebar {
  width: 30%;
  height: fit-content;
  padding: 5px;
  position: -webkit-sticky;
  position: sticky;
  top: 10px;
}
</style>
