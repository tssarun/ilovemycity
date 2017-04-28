exports.home=function(req,res){
  res.render('index',{
    sitename:'I Love My City',
    title:'I Love My City',
    headline:'Arunkumar - module 2 assignment using ejs',
  });
}

exports.city=function(req,res){
    var cityName=req.params.city;
    var title,heading,sitename;
    var imageCount=4;
    

    if(cityName === 'chennai'){
       title="Chennai";
       heading ="Chennai, formerly known as Madras, is the capital of the state of Tamil Nadu and is India's fourth largest city. It is located on the Coromandel Coast of the Bay of Bengal. With an estimated population of 8.9 million (2014), the 400-year-old city is the 31st largest metropolitan area in the world. The city of Madras in 1909 Chennai boasts of a long history from the English East India Company, through the British Raj to its evolution in the late 20th century as a services and manufacturing hub for India. Additionally, the pre-city area of Chennai has a long history within the records of South Indian Empires.";
    }
    else if(cityName === 'mysore'){
       title ="Mysuru";
       heading="The Kingdom of Mysore was a kingdom in southern India, traditionally believed to have been founded in 1399 in the vicinity of the modern city of Mysore. The kingdom, which was ruled by the Wodeyar family, initially served as a vassal state of the Vijayanagara Empire. With the decline of the Vijayanagara Empire (c. 1565), the kingdom became independent. The 17th century saw a steady expansion of its territory and during the rule of Narasaraja Wodeyar I and Chikka Devaraja Wodeyar, the kingdom annexed large expanses of what is now southern Karnataka and parts of Tamil Nadu to become a powerful state in the southern Deccan.";
    }
    else if(cityName === 'bengaluru'){
       title="Bengaluru";
       heading ="Bengaluru (previously Bendakaluru) was founded by Kempe Gowda I, who built a mud fort at the site in 1537. It has been developed over the years into an industrial and IT hub in India. Kempe Gowda I (1510–1570), Modern Bengaluru was founded by a feudatory of the Vijayanagara Empire, who built a mud fort in the year 1537. Kempe Gowda also referred to the new town as his 'gandu bhoomi' or 'Land of Heroes'. Within Bangalore, the town was divided into petes (IPA: [pete]) or market. The town had two main streets: Chickkapete Street ran east-west and Doddapete Street ran north-south. Their intersection formed Doddapete square — the heart of then Bangalore. Kempe Gowda's successor, Kempe Gowda II, built temples, tanks including Kempapura and Karanjikere tanks and four watching towers that marked Bengaluru's boundary";
    }
    else if(cityName === 'ooty'){
       title="Ooty";
       heading="Udagamandalam and abbreviated as Udhagai and Ooty is a town and municipality in the Indian state of Tamil Nadu. It is located 80 km north of Coimbatore and is the capital of the Nilgiris district. It is a popular hill station located in the Nilgiri Hills.";
    }
    
    sitename = title +' | I Love My City';
    res.render('city',{
        sitename:sitename,
        title:title,
        headline:heading,
        city:cityName,
        numberOfImages:imageCount});
  }
