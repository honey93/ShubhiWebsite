export const state = () => {
  return { count: 3,allowedUrls:["how-to-set-up-responsive-ui-search-in-vue-js","vue-blog"],stuff:[

    {
      id: 1,
      title:"Physics and Technology for Future Presidents",
      objective: "Course prototype, taught 200+ students, created interactive quiz and games (Canvas LMS, Storyline)",
      url:
        "https://360.articulate.com/review/content/15915d84-7b73-4221-b60e-c07ca206bc89/review",
      publication: "University of California, Berkeley, USA",
      Year: "2018",
      imageUrl:
        "QC9.png"
    },

    {
      id: 2,
      title: "Inclusive Broadband for Quality Education",
      objective: "E-learning policy content for 50+ Asia Pacific countries.",
      url:
        "https://drive.google.com/drive/folders/1rT5H4y7p7AcQtVePONcVSy_N0a1gSPPX?usp=sharing",
      publication: "United Nations ESCAP, Bangkok, Thailand",
      Year: "2019",
      imageUrl:
        "UN9.png"
    },


    {
      id: 3,
      title:"Refashoning Lives of Rural Women Artisans",
      objective: "Case study with branched scenario's for handicraft industry professionals",
      url:
        "https://drive.google.com/drive/folders/19c8QXekIMiYDUY6QORaVsiCIL-pZHHo9?usp=sharing",
      publication: "Okhai Enterprise, Gujarat, India",
      Year: "2017",
      imageUrl:
        "Okhai6.png"
    },
    
    {
      id: 4,
      title:
        "Greenolution: Environmental Conservation",
      objective: "Case study and layers interaction for sustainability professionals (Articulate)",
      url:
         "https://360.articulate.com/review/content/04a96cae-cfa1-4480-ad76-84d2a53636b0/review",
      publication: "Tata Power Limited, Mumbai, India",
      Year: "2016",
      imageUrl:
        "GRR13.png"
    },

    {
      id: 5,
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
      id: 6,
      title:
       "Life Skills for Women Leaders",
       objective: "Microlearning animation (Biteable). Case received Best Case Award from International Management Research Academy, London ",
       url:
         "https://biteable.com/watch/understanding-boundary-through-animation-micro-l-2596181",
      publication: "Grihini, Tata Motors Limited, Pune, India",
      Year: "2015",
      imageUrl:
        "G7.png" 
      },   

      {
        id: 7,
        title:"Salesforce Training",
        objective: "Branched scenario, software simulation, job aids, and interactive screenshots; trained staff in Europe, Asia, and Australia (Adobe Captivate)",
        url:"https://360.articulate.com/review/content/b0ff34a5-8707-49c6-bf5f-10a1ee0ec8a3/review",
        publication: "Room To Read, San Francisco, USA",
        Year: "2020",
        imageUrl:
          "SF3.png"
      },


    {
      id: 8,
      title: " E-Learning in Agriculture ",
      objective: "Content and business development framework for agri-ed-tech - to reach a new market of ~100 Mn people",
      url:
        "https://www.slideshare.net/secret/EGBdN99RltKLkw",
      publication: "Coursera, Mountain View, USA",
      Year: "2019",
      imageUrl:
        "CS13.png"
    },

    {
      id: 9,
      title:
        "Professional Driver Training Initiative",
      objective: "Training material for sales professionals (Vyond)",
      url:
         "https://drive.google.com/drive/folders/1cy2P9xkNe3IS7Ln6RjR0NmT46i24oOAP?usp=sharing",
      publication: "Tata Motors Limited, Pune, India",
      Year: "In Process",
      imageUrl:
        "TMLA1.png"
    },

    {
      id: 10,
      title:
        "Design Thinking for Cost & Value Innovation",
      objective:"Case study and dial interactions on innovation (Storyline)",
      url:
         "https://360.articulate.com/review/content/d1e4b017-6cb2-44e8-8b5b-5ae49a4ec61a/review",
      publication: "Tata Communication Limited, Mumbai, India",
      Year: "2017",
      imageUrl:
        "SM5.png"
    },

    {
      id: 11,
      title: "Online Education Business Development",
      objective: "Ed-tech case study for postgraduates and executives; program earns ~$2 Mn annually.",
      url:
        "https://drive.google.com/drive/folders/1-COJKyPPwn4lvu5dnr-so1HZt0LEt7TT?usp=sharing",
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
