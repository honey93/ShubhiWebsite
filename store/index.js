export const state = () => {
  return { count: 3,allowedUrls:["how-to-set-up-responsive-ui-search-in-vue-js","vue-blog"],stuff:[

    {
      id: 1,
      title:"Interactive AI Software Simulation",
      objective: "Design/develop software demo, interactive practice steps and test (Articulate Storyline)",
      url:
        "https://360.articulate.com/review/content/65ded30d-dd38-406c-99c9-c91fa4518485/review",
      publication: "Techstars 2019 Startup, San Francisco, USA",
      Year: "2020",
      imageUrl:
        "IL1.png"
    }, 

    {
      id: 2,
      title:
       "Life Skills for Women",
       objective: "Animation (Biteable). Case received Best Case Award from International Management Research Academy, London ",
       url:
         "https://biteable.com/watch/setting-boundary-micro-e-learning-animation-2596181",
      publication: "Grihini, Tata Motors Limited, Pune, India",
      Year: "2015",
      imageUrl:
        "G8.png" 
      },   

    {
      id: 3,
      title: "Fin-Tech and Ed-Tech",
      objective: "Research/Developed training content for policy makers of 50+ Asia Pacific nations.",
      url:
        "https://www.unescap.org/sites/default/files/Inclusive%20Use%20of%20Broadband%20Connectivity%20for%20Quality%20Education%2C%20Insights%20from%20Asia%20and%20the%20Pacific_0.pdf",
      publication: "United Nations ESCAP, Bangkok, Thailand",
      Year: "2019",
      imageUrl:
        "UN9.png"
    },

    {
      id: 4,
      title:"Refashoning Lives of Rural Women Artisans",
      objective: "Case study with branched scenario's for handicraft industry professionals",
      url:
        "https://drive.google.com/file/d/1Bo1Nn5gTkH6I9Utv_s4tDIlin2OGuckv/view?usp=sharing",
      publication: "Okhai Enterprise, Gujarat, India",
      Year: "2017",
      imageUrl:
        "Okhai6.png"
    },
    
    {
      id: 5,
      title:
        "Greenolution: Environmental Conservation",
      objective: "Case study with layers interaction for sustainability professionals (Articulate)",
      url:
         "https://360.articulate.com/review/content/73a24af8-1af9-4b8f-9200-c51874cab129/review",
      publication: "Tata Power Limited, Mumbai, India",
      Year: "2016",
      imageUrl:
        "GRR13.png"
    },

    {
      id: 6,
      title:"Physics and Technology for Future Presidents",
      objective: "Design/develop/deliver interactive training and game (Canvas LMS, Storyline)",
      url:
        "https://360.articulate.com/review/content/c2b47a5b-d0d0-46d6-9b4f-4ff1dbf5c258/review",
      publication: "University of California, Berkeley, USA",
      Year: "2018",
      imageUrl:
        "QC9.png"
    },

    {
      id: 7,
      title:
       "SPIN Selling",
       objective: "Create sales course with scenario (Rise 360)",
       url:
         "https://rise.articulate.com/share/FzdKl1V1pQNdmlLzGV8UawZ8SLw2mu6G",
      publication: "NA",
      Year: "2020",
      imageUrl:
        "scenario.png" 
      },  
 
      {
        id: 8,
        title:"Salesforce Interactive Screenshots",
        objective: "Develop training & job aids; trained staff in Europe and Australia (Adobe Captivate)",
        url:"https://360.articulate.com/review/content/1381f364-5235-4cc6-ab05-1cdb77c184ea/review",
        publication: "Room To Read, San Francisco, USA",
        Year: "2020",
        imageUrl:
          "SF7.png"
      },

    {
      id: 9,
      title: "Agriculture E-Learning",
      objective: "Content & business dev framework for agri-ed-tech - to capture a new market of ~50 Mn people",
      url:
        "https://www.slideshare.net/secret/EGBdN99RltKLkw",
      publication: "Coursera, Mountain View, USA",
      Year: "2019",
      imageUrl:
        "CS13.png"
    },

    {
      id: 10,
      title:
        "Professional Driver Training",
      objective: "Case study and animated teaching notes for sales professionals (Vyond)",
      url:
         "https://drive.google.com/file/d/1DfVHaPyscHkRKc9zHY7gU1Wjs4KXRRlZ/view?usp=sharing",
      publication: "Tata Motors Limited, Pune, India",
      Year: "In Process",
      imageUrl:
        "TMLA1.png"
    },

    {
      id: 11,
      title:
        "Design Thinking for Cost & Value Innovation",
      objective:"Case study with dial interaction (Storyline)",
      url:
         "https://360.articulate.com/review/content/2a17bd6f-ab86-4547-951f-555e9ad6e155/review",
      publication: "Tata Communication Limited, Mumbai, India",
      Year: "2017",
      imageUrl:
        "SM5.png"
    },

    {
      id: 12,
      title:
        "Club Enerji Sustainability Education",
      objective: "Energy conservation course for school leadership (Rise 360). Reached 450+ schools ",
      url:
         "https://rise.articulate.com/share/1zMEPKU_MLgnNKtWMAlU8yZDiAxRQpM0",
      publication: "Tata Power, Mumbai, India",
      Tools: "Rise 360, Interviews, Quantitative Research",
      imageUrl:
        "CE7.png"
    },

    {
      id: 13,
      title: "Online MBA",
      objective: "Analysis/design of online MBA program; created case study on e-learning business development; program earns ~$2 Mn annually.",
      url:
        "https://drive.google.com/file/d/16cSDlDmBBHkLL9ng3BkNSir0FKORtY4j/view?usp=sharing",
      publication: "Indian Institute of Management Ahd, India",
      Year: "2019",
      imageUrl:
        "IIMA2.png"
    },

  ],
  companies:[{id:1,name:"Room To Read",url:"R2R1.png",duration:"Jan 2020 - Apil 2020"},
  {id:2,name:"Coursera",url:"cour.png", duration:"Nov 2019 - May 2020"},
  {id:3,name:"UC Berkeley",url:"UCBL.jpg", duration:"Jan 2018 - May 2019"},
  {id:4,name:"United Nations",url:"UN2.jpg",duration:"May 2018 - July 2018"}]


};
};

export const mutations = {
  incr(state) {
    state.count = 5;
  }
};
export const actions = {
  async nuxtServerInit({ dispatch }) {
    console.log("nuxtServerInit called");
    await dispatch("blogs/fetchBlogs");
  }
};
