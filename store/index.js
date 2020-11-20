export const state = () => {
  return { count: 3,allowedUrls:["how-to-set-up-responsive-ui-search-in-vue-js","vue-blog"],stuff:[

    {
      id: 1,
      title: "Transforming Agriculture Sector with Ed-Tech",
      objective: "Need Assessment for Business & Content Development to capture new market of ~50Mn farmers",
      url:
        "https://shubhiiima.wixsite.com/shubhithakuria/copy-of-articulate-storyline",
      publication: "Coursera, Mountain View, USA",
      Year: "2019",
      imageUrl:
        "CS14.png"
    },

    {
      id: 2,
      title:"Physics and Technology for Future Presidents",
      objective: "Design/develop/deliver/evaluate interactive training and discussion sections (Canvas LMS)",
      url:
        "https://www.linkedin.com/pulse/teaching-physics-technology-future-presidents-shubhi-thakuria/",
      publication: "University of California, Berkeley, USA",
      Year: "2018",
      imageUrl:
        "QC9.png"
    },

    {
      id: 3,
      title: "IIMA's Leap: Digitalizing MBA Programs",
      objective: "Designing online MBA product for India's top management institute; program earns recurring revenue of multi million dollars.",
      url:
        "https://shubhiiima.wixsite.com/shubhithakuria/onlinemba",
      publication: "Indian Institute of Management Ahd, India",
      Year: "2019",
      imageUrl:
        "IIMAX1.png"
    },


    {
      id: 4,
      title:"Refashoning Lives of Rural Women Artisans",
      objective: "Created/published case study with branched scenario's for handicraft industry professionals",
      url:
        "https://drive.google.com/file/d/1Bo1Nn5gTkH6I9Utv_s4tDIlin2OGuckv/view?usp=sharing",
      publication: "Okhai Enterprise, Gujarat, India",
      Year: "2017",
      imageUrl:
        "GH7.png"
    },
    
    {
      id: 5,
      title:
        "Greenolution: Environmental Conservation",
      objective: "Layer interaction for sustainability professionals with case study (Articulate)",
      url:
         "https://360.articulate.com/review/content/8a958bcc-3983-4a93-9e12-a6a879561cbc/review",
      publication: "Tata Power Limited, Mumbai, India",
      Year: "2016",
      imageUrl:
        "GRR14.png"
    },

    {
      id: 6,
      title:"Artificial Intelligence to Accelerate Lease Review",
      objective: "Design/develop interactive software simulation (Articulate Storyline)",
      url:
        "https://shubhiiima.wixsite.com/shubhithakuria/articulate-storyline",
      publication: "Techstars 2019 Startup, San Francisco, USA",
      Year: "2020",
      imageUrl:
        "IL1.png"
    }, 

    
    {
      id: 7,
      title: "Digital Skills for Inclusive Development",
      objective: "Created fin-tech and ed-tech training content for policy makers of 40+ Asia Pacific nations.",
      url:
        "https://www.unescap.org/sites/default/files/Inclusive%20Use%20of%20Broadband%20Connectivity%20for%20Quality%20Education%2C%20Insights%20from%20Asia%20and%20the%20Pacific_0.pdf",
      publication: "United Nations ESCAP, Bangkok, Thailand",
      Year: "2019",
      imageUrl:
        "UN9.png"
    },

    {
      id: 8,
      title:
       "Acquire your Next Big Client with SPIN Selling",
       objective: "Design/develop sales training with scenario (Articulate Rise 360)",
       url:
         "https://rise.articulate.com/share/FzdKl1V1pQNdmlLzGV8UawZ8SLw2mu6G",
      publication: "Techstars 2019 Startup, San Francisco, USA",
      Year: "2020",
      imageUrl:
        "sx3.png" 
      },  

    {
      id: 9,
      title:
        "Design Thinking for Cost & Value Innovation",
      objective:"Research/developed case study for promoting a culture of innovation in an organization",
      url:
         "https://drive.google.com/file/d/1cctXQP9mtDrEmWu6TkuY9sf-vxEWZSwd/view?usp=sharing",
      publication: "Tata Communication Limited, Mumbai, India",
      Year: "2017",
      imageUrl:
        "SM5.png"
    },

    {
      id: 10,
      title:
       "Empowering Women Employees with Life Skills",
       objective: "Animation (Biteable). Case received Best Case Award from International Management Research Academy, London ",
       url:
         "https://biteable.com/watch/setting-boundary-micro-e-learning-animation-2596181",
      publication: "Grihini, Tata Motors Limited, Pune, India",
      Year: "2015",
      imageUrl:
        "G9.png" 
      },   
       
      {
        id: 11,
        title:
         "E-Learning components",
         objective: "Created an Inforgraphic (Canva) ",
         url:
           "https://drive.google.com/file/d/1CisohJKUJrb4PhyuvPma5TTh2mxhaqK-/view?usp=sharing",
        publication: "effectiveEd.tech",
        Year: "2020",
        imageUrl:
          "1.png" 
        },  
        {
          id: 12,
          title:
           "Design Principles for Visual Communication",
           objective: "Designed and Delivered a talk on Graphic Design Principles (Canva)  ",
           url:
             "https://www.canva.com/design/DAELB9GfEFI/64_mXrhkGn9kz8rLDVllJg/view?utm_content=DAELB9GfEFI&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton",
          publication: "Techstars 2019 Startup, San Francisco, USA",
          Year: "2020",
          imageUrl:
            "GD1.png" 
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
