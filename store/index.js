export const state = () => {
  return { count: 3,allowedUrls:["how-to-set-up-responsive-ui-search-in-vue-js","vue-blog"],stuff:[

    {
      id: 1,
      title:
        "Club Enerji",
      objective: "School leadership & sustainability professionals training (Rise 360). Reached 450+ schools",
      url:
         "https://rise.articulate.com/share/1zMEPKU_MLgnNKtWMAlU8yZDiAxRQpM0",
      publication: "Tata Power Limited, Mumbai, India",
      Tools: "Rise 360, Interviews, Quantitative Research",
      imageUrl:
        "CE4.png"
    },

    {
      id: 2,
      title: "Broadband Connectivity for Quality Education",
      objective: "Created e-learning policy advocacy content for 50+ Asia Pacific countries.",
      url:
        "https://drive.google.com/drive/folders/1rT5H4y7p7AcQtVePONcVSy_N0a1gSPPX?usp=sharing",
      publication: "United Nations ESCAP, Bangkok, Thailand",
      Year: "2019",
      imageUrl:
        "UNZ1.png"
    },

    {
      id: 3,
      title:"Refashoning Lives of Rural Women",
      objective: "Co-authored case study and storyboard for Handicraft and sustainability professionals (Captivate)",
      url:
        "https://drive.google.com/drive/folders/19c8QXekIMiYDUY6QORaVsiCIL-pZHHo9?usp=sharing",
      publication: "Okhai Enterprise, Gujarat, India",
      Year: "2017",
      imageUrl:
        "Okhai4.png"
    },
    
    {
      id: 4,
      title:
        "Greenolution: Environmental Conservation",
      objective: "Evaluated impact and created environmental conservation learning material for 5000+ employees.",
      url:
         "https://www.slideshare.net/secret/GlS1FmTSn36OOE",
      publication: "Tata Power Limited, Mumbai, India",
      Year: "2016",
      imageUrl:
        "GNR11.png"
    },

    {
      id: 5,
      title:
        "SauMill: Cost & Value Innovation",
      objective:"Created case study and video animation to foster innovative thinking (Vyond)",
      url:
         "https://www.slideshare.net/secret/r7w3c0luJid0ai",
      publication: "Tata Communication Limited, Mumbai, India",
      Year: "2017",
      imageUrl:
        "SauMill 1.png"
    },

    {
      id: 6,
      title:"Physics and Technology for Future Presidents",
      objective: "Taught 200+ undergraduates, conducted assessment & created training (Articulate Storyline)",
      url:
        "https://360.articulate.com/review/content/2784c132-8678-4dcf-b843-3613452240c4/review",
      publication: "University of California, Berkeley, USA",
      Year: "2018",
      imageUrl:
        "QC8.png"
    },

    {
      id: 7,
      title: " E-Learning in Agriculture ",
      objective: "Created content and business development framework - potential to impact 100 Mn people",
      url:
        "https://www.slideshare.net/secret/EGBdN99RltKLkw",
      publication: "Coursera, Mountain View, USA",
      Year: "2019",
      imageUrl:
        "CS11.png"
    },
    
    {
      id: 8,
      title:"Salesforce Training",
      objective: "Salesforce Admin, created training & trained staff in Europe and Australia (Adobe Creative Cloud)",
      publication: "Room To Read, San Francisco, USA",
      Year: "2020",
      imageUrl:
        "SF1.png"
    },
    {
      id: 9,
      title:
       "Social Welfare Society: Empowering Women",
       objective: "Training for 800+ employees on on scaling enterprises. Received Best Case Award from International Management Research Academy, London",
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
        "Creating Skilled Truck Drivers",
      objective: "Created training material for social responsbility professional staff onboarding.",
      url:
         "https://www.slideshare.net/secret/j1MZ95WamJn2lH",
      publication: "Tata Motors Limited, Pune, India",
      Year: "In Process",
      imageUrl:
        "TMLA.png"
    },

    {
      id: 11,
      title: "Online Education",
      objective: "Ed-tech business development course for postgraduates (Rise 360); earns ~$2 Mn annually.",
      url:
        "https://rise.articulate.com/share/0xRmKCfKGTsl85zpIJgHS5Z0w-yG3bfb",
      publication: "Indian Institute of Management Ahd, India",
      Year: "2019",
      imageUrl:
        "IIMA1.png"
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
