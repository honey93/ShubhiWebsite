export const state = () => {
  return { count: 3,allowedUrls:["how-to-set-up-responsive-ui-search-in-vue-js","vue-blog"],stuff:[

    {
      id: 1,
      title:"Physics and Technology for Future Presidents",
      objective: "Taught 200+ undergraduates, conducted assessment & created Articulate Storyline course",
      url:
        "https://360.articulate.com/review/content/1ec8af70-1b96-4c8f-b115-3bee5284e903/review",
      publication: "University of California, Berkeley, USA",
      Year: "2018",
      imageUrl:
        "QC9.png"
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
        "UN9.png"
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
        "Okhai6.png"
    },
    
    {
      id: 4,
      title:
        "Greenolution: Environmental Conservation",
      objective: "Evaluated impact and created environmental conservation learning material for 5000+ employees (Lectora)",
      url:
         "https://drive.google.com/open?id=1XQHOpl8d0zzg3UTDVbImHiCivQtXcfPO",
      publication: "Tata Power Limited, Mumbai, India",
      Year: "2016",
      imageUrl:
        "GRR13.png"
    },

    {
      id: 5,
      title:"Salesforce Training",
      objective: "Created animated and blended learning training; trained staff in Europe and Australia (Biteable, Adobe Creative Cloud)",
      url:
      "https://biteable.com/watch/pizza-picklist-and-salesforce-2597403",
      publication: "Room To Read, San Francisco, USA",
      Year: "2020",
      imageUrl:
        "SF3.png"
    },

    
    {
      id: 6,
      title:
       "Women Empowerment",
       objective: "Microlearning Animation video (Biteable). Grihini case received Best Case Award from International Management Research Academy, London ",
       url:
         "https://biteable.com/watch/understanding-boundary-through-animation-micro-l-2596181",
      publication: "Grihini, Tata Motors Limited, Pune, India",
      Year: "2015",
      imageUrl:
        "G7.png" 
      },   

    {
      id: 7,
      title:
        "Club Enerji Sustainability Education",
      objective: "Rise 360 course for sustainability professionals & school leaders. Reached 450+ schools",
      url:
         "https://rise.articulate.com/share/1zMEPKU_MLgnNKtWMAlU8yZDiAxRQpM0",
      publication: "Tata Power, Mumbai, India",
      Tools: "Rise 360, Interviews, Quantitative Research",
      imageUrl:
        "CE7.png"
    },


    {
      id: 8,
      title: " E-Learning in Agriculture ",
      objective: "Created content and business development framework - potential to impact 100 Mn people",
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
        "Skilling Truck Drivers",
      objective: "Created training material and teaching notes for employee training",
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
        "SauMill: Cost & Value Innovation",
      objective:"Created case study and video animation to foster innovative thinking (Vyond)",
      url:
         "https://drive.google.com/drive/folders/1w1io2OCeFyInFaLThWTnV5bnSgiUP5Jy?usp=sharing",
      publication: "Tata Communication Limited, Mumbai, India",
      Year: "2017",
      imageUrl:
        "SM5.png"
    },

    {
      id: 11,
      title: "Online Education Business Development",
      objective: "Ed-tech case study for postgraduates with teaching notes; program earns ~$2 Mn annually.",
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
