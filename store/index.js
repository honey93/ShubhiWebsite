export const state = () => {
  return { count: 3,allowedUrls:["how-to-set-up-responsive-ui-search-in-vue-js","vue-blog"],stuff:[
    {
      id: 1,
      title:"Salesforce Training",
      objective: "Created Salesforce training using Articulate Storyline 360 and trained employees.",
      publication: "Room To Read, San Francisco, USA",
      Year: "2020",
      imageUrl:
        "SF1.png"
    },
    
    {
      id: 2,
      title: "Broadband Connectivity for Quality Education",
      objective: "Created e-learning policy advocacy content for 50+ Asia Pacific countries.",
      url:
        "https://www.slideshare.net/secret/9STeW9GnNlmmFg",
      publication: "United Nations ESCAP, Bangkok, Thailand",
      Year: "2019",
      imageUrl:
        "UNZ1.png"
    },

    {
      id: 3,
      title:"Okhai Center for Empowerment",
      objective: "Created employee onboarding training material for a Handicraft organization and sustainability professionals.",
      url:
        "https://www.slideshare.net/secret/hk4W0qSVr9L1pc",
      publication: "Okhai Enterprise, Gujarat, India",
      Year: "2017",
      imageUrl:
        "Okhai1.png"
    },
    
      {
        id: 4,
        title:
          "Club Enerji Program",
        objective: "Created training material for environment professionals and school leadership. Reached 450+ schools.",
        url:
           "https://www.slideshare.net/secret/HN7IJr5LSjfqyG",
        publication: "Tata Power Limited, Mumbai, India",
        Year: "2016",
        imageUrl:
          "CE2.png"
      },
    {
      id: 5,
      title:
        "Cost & Value Innovation",
      objective:"Created training material for management students and corporate employees to foster innovative thinking.",
      url:
         "https://www.slideshare.net/secret/r7w3c0luJid0ai",
      publication: "Tata Communication Limited, Mumbai, India",
      Year: "2017",
      imageUrl:
        "SM1.png"
    },


    {
      id: 6,
      title: " E-Learning in Agriculture ",
      objective: "Created instruction development framework with potential to impact 100 Mn people.",
      url:
        "https://www.slideshare.net/secret/EGBdN99RltKLkw",
      publication: "Coursera, Mountain View, USA",
      Year: "2019",
      imageUrl:
        "CS11.png"
    },

    {
      id: 7,
      title:"Physics and Technology for Future Presidents",
      objective: "Taught 200+ undergraduates and created training content using Articulate Storyline.",
      url:
        "https://drive.google.com/drive/folders/1TrusSz07Jn0U1euX9QX_WDaAT-WnIxVX?usp=sharing",
      publication: "University of California, Berkeley, USA",
      Year: "2018",
      imageUrl:
        "QC2.png"
    },

    {
      id: 8,
      title: "Online Education Strategy",
      objective: "E-learning business development plan and course material for postgraduate students; program earns $X Mn annually.",
      url:
        "https://www.slideshare.net/secret/gTd0qFKdBZUhk",
      publication: "Indian Institute of Management, Ahmedabad, India",
      Year: "2019",
      imageUrl:
        "IIMA1.png"
    },

    {
      id: 9,
      title:
       "Social Welfare Society: Empowering Women",
       objective: "Created enterprise scaling training material for sustainability professionals and 800+ employees. Won Best Case Award from International Management Research Academy, London.",
       url:
         "https://www.slideshare.net/secret/MxBFJniP26NzmF",
      publication: "Grihini, Tata Motors Limited, Pune, India",
      Year: "2015",
      imageUrl:
        "GH1.png" 
      },

    {
      id: 10,
      title:
        "Environmental Conservation by Employees",
      objective: "Evaluated impact and created environmental conservation learning material for 5000+ employees.",
      url:
         "https://www.slideshare.net/secret/GlS1FmTSn36OOE",
      publication: "Tata Power Limited, Mumbai, India",
      Year: "2016",
      imageUrl:
        "GNR11.png"
    },

    {
      id: 11,
      title:
        "Creating Skilled Truck Drivers",
      objective: "Created training material for sustainability professionals and employee onboarding.",
      url:
         "https://www.slideshare.net/secret/j1MZ95WamJn2lH",
      publication: "Tata Motors Limited, Pune, India",
      Year: "In Process",
      imageUrl:
        "TMLA.png"
    }
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
