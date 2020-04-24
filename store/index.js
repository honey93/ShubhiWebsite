export const state = () => {
  return { count: 3,allowedUrls:["how-to-set-up-responsive-ui-search-in-vue-js","vue-blog"],stuff:[
    {
      id: 1,
      title: "Inclusive Broadband Connectivity",
      objective: "Created policy advocacy content for 50+ Asia Pacific countries.",
      url:
        "https://www.unescap.org/sites/default/files/Inclusive%20Use%20of%20Broadband%20Connectivity%20for%20Quality%20Education%2C%20Insights%20from%20Asia%20and%20the%20Pacific_0.pdf",
      publication: "United Nations ESCAP",
      Year: "2019",
      imageUrl:
        "UNZ.png"
    },
    {
      id: 2,
      title:"Salesforce Training",
      objective: "Created training modules and trained employees to use Salesforce features.",
      url:
        "Confidential material",
      publication: "Room To Read",
      Year: "2020",
      imageUrl:
        "SF1.png"
    },
    
    {
      id: 3,
      title:"Okhai Center for Empowerment",
      objective: "Created training material for a Handicraft Organization.",
      url:
        "https://cases.iima.ac.in/index.php/okhai-centre-for-empowerment-refashioning-the-lives-of-rural-women.html",
      publication: "Okhai Enterprise ",
      Year: "2017",
      imageUrl:
        "Okhai1.png"
    },
    
      {
        id: 4,
        title:
          "Club Enerji Program",
        objective: "Created energy conservation training material for environment professionals and school leadership. Reached 450+ Indian schools.",
        url:
           "https://drive.google.com/open?id=1SfOLcYTDFg3R0tf0QyBiptHJNc586Xdm",
        publication: "Tata Power Limited",
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
         "http://www.openinnovationtmc.org/HOME/soitmc/sub/sub.htm?nav_code=soi1479103409",
      publication: "Tata Communication Limited",
      Year: "2017",
      imageUrl:
        "SM1.png"
    },

    {
      id: 6,
      title:"Physics and Technology for Future Presidents",
      objective: "Taught 170+ undergraduate students and created classroom teaching and course assessment for teaching Physics.",
      url:
        "https://drive.google.com/drive/folders/1TrusSz07Jn0U1euX9QX_WDaAT-WnIxVX?usp=sharing",
      publication: "University of California, Berkeley",
      Year: "2018",
      imageUrl:
        "QC1.png"
    },

    {
      id: 8,
      title: " Agriculture E-Learning",
      objective: "Created instruction development framework for e-learning with potential to impact 100 Mn farmers.",
      url:
        "https://drive.google.com/file/d/1qz3ea8c6C57pBCDN9g0Y38xNkdVvfDZi/view?usp=sharing",
      publication: "Coursera",
      Year: "2019",
      imageUrl:
        "CS1.png"
    },


    {
      id: 8,
      title: "IIMA’s Digital Leap: Online Education Strategy",
      objective: "Created training material for e-learning business development; resulted in launch of online courses earning $X Mn annually.",
      url:
        "https://cases.iima.ac.in/index.php/iima-s-digital-leap-formulating-online-education-strategy.html",
      publication: "Indian Institute of Management, Ahmedabad",
      Year: "2019",
      imageUrl:
        "IIMA1.png"
    },

    {
      id: 9,
      title:
       "Social Welfare Society: Empowering Women",
       objective: "Created social sector enterprise scaling strategy training material for corporate social responsibility professionals. Won Best Case Award from International Management Research Academy, London.",
       url:
         "https://drive.google.com/open?id=1ftjbr4B4YgbacxewpOARLlu3Ox2kbYk3",
      publication: "Grihini, Tata Motors Limited",
      Year: "2015",
      imageUrl:
        "GH1.png" 
      },

    {
      id: 10,
      title:
        "Environmental Conservation for Employees",
      objective: "Created learning material on environmental conservation for 5000+ Tata Power employees.",
      url:
         "https://drive.google.com/open?id=15AwxJpoeQaCsUqrEefe11lm_paTQPJCu",
      publication: "Tata Power Limited",
      Year: "2016",
      imageUrl:
        "GNR11.png"
    },

    {
      id: 11,
      title:
        "Creating Skilled Truck Drivers",
      objective: "Created training material for new employee orientation.",
      url:
         "",
      publication: "Tata Motors Limited",
      Year: "In Process",
      imageUrl:
        "TMLA.png"
    }
  ],
  companies:[{id:1,name:"Room To Read",url:"R2R.png",duration:"Jan 2020 - Apil 2020"},
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
