document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const activityId = params.get("id");

    // JSON Object storing all activity details
    const activities = [
        {
            "id": "1",
            "date": "Hyderabad, December 1, 2024",
            "title": "MLC Amer Ali Khan Launches S-Hub to Empower Youth and Entrepreneurs.",
            "content1": "On November 29, 2024, Amer Ali Khan, Member of the Legislative Council (MLC) and News Editor of The Siasat Daily, inaugurated S-Hub, an initiative aimed at providing employment assistance, skill development, and startup guidance. The launch event took place at The Siasat Daily Auditorium in Hyderabad, attended by media representatives, entrepreneurs, and community members.",
            "content2": "",
            "subheading1": "Aim and Purpose of S-Hub",
            "subcontent11": "Job Search & Career Growth – Providing job listings, resume-building support, and interview preparation.",
            "subcontent12": "Skill Development – Enhancing communication skills, business strategies, and English proficiency.",
            "subcontent13": "Startup & Business Guidance – Assisting entrepreneurs in launching and expanding businesses.",
            "subcontent14": "Women Empowerment – Creating opportunities for women to showcase their talents and become financially independent.",
            "subheading2": "Scope of S-Hub",
            "subcontent21": "The initiative operates from Monday to Thursday, between 12 PM and 4 PM, at The Siasat Daily’s Office. It offers:",
            "subcontent22": "Career counseling and job placement assistance. Workshops on communication, leadership, and soft skills. Mentorship for startups and business development. Training sessions in digital marketing, financial management, and entrepreneurship.",
            "subcontent23": "S-Hub aims to bridge the gap between talent and opportunity, ensuring that young professionals and business aspirants receive the right guidance and mentorship to achieve their goals.",
            "subcontent24": "",
            "subheading3": "",
            "subcontent31": "",
            "subcontent32": "",
            "subcontent33": "",
            "subcontent34": "",
            "image_url1": "assets/images/launch.jpg",
            "image_url2": ""
        },
        {
            "id": "2",
            "date": "Hyderabad, 7th February 2025",
            "title": "The Consulate General of the Islamic Republic of Iran in Hyderabad Celebrates 46th National Day",
            "content1": "The Consulate General of the Islamic Republic of Iran in Hyderabad commemorated its 46th National Day on 7th February 2025, marking the anniversary of the establishment of the Islamic Republic. The event was held with great enthusiasm, bringing together dignitaries, diplomats, cultural enthusiasts, and prominent personalities from the city.",
            "content2": "The esteemed Guest of Honour, Amer Ali Khan, Member of the Legislative Council (MLC) for Telangana, graced the occasion with his insightful address. Speaking at the event, Amer Ali Khan highlighted the long-standing historical and cultural ties between India and Iran, which date back centuries and have enriched both nations in terms of art, literature, trade, and diplomacy.",
            "subheading1": "India-Iran Relations: A Historical Bond",
            "subcontent11": "In his speech, Amer Ali Khan emphasized the deep-rooted connections between India and Iran, underscoring how these ties have withstood the test of time. Iran and India have shared not only a geographical proximity but also a strong cultural, linguistic, and historical relationship. From the days of the Persian Empire to the Mughal era and beyond, Iran's influence on Indian culture, language, and architecture is evident, he remarked.",
            "subcontent12": "He further emphasized Iran's pivotal role in shaping Hyderabad's rich cultural and architectural heritage, noting the shared love for Persian literature and the influence of Iranian architectural styles in the city's historical monuments. Telangana, particularly Hyderabad, has a special relationship with Iran, owing to its Persian-influenced culture and culinary traditions, Amer Ali Khan added.",
            "subcontent13": "",
            "subheading2": "Special Ties with Telangana",
            "subcontent21": "The MLC also highlighted the growing bilateral cooperation between Iran and Telangana. He praised the state's strategic initiatives in promoting cultural exchange and fostering business collaborations with Iran. He expressed optim>The MLC highlighted the growing bilateral cooperation between Iran and Telangana. He praised the state's strategic initiatives in promoting cultural exchange and fostering business collaborations with Iran. He expressed optimism that this relationship would continue to thrive, benefiting both regions in trade, technology, and cultural interactions.",
            "subcontent22": "",
            "subcontent23": "",
            "subheading3": "Diplomatic Significance of the Celebration",
            "subcontent31": "The Consulate General's 46th National Day celebration served as a reminder of the importance of diplomatic ties in fostering peace, development, and cultural exchange. The event featured traditional Iranian music, cultural performances, and a showcase of Iranian cuisine, offering a glimpse into Iran's vibrant heritage.",
            "subcontent32": "The Consulate General expressed gratitude to Amer Ali Khan and other esteemed guests for their participation and support in strengthening Iran-India relations. The occasion reinforced the enduring friendship between the two nations and the pivotal role Telangana plays in this partnership.",
            "subcontent33": "As the celebrations concluded, attendees left with a renewed sense of camaraderie and optimism for a future of continued cooperation between India and Iran, particularly through the enduring bond shared with Telangana.",
            "image_url1": "assets/images/a1.jpeg",
            "image_url2": "assets/images/a1.jpeg"
        },
        {
            "id": "3",
            "date": "Hyderabad, February 16, 2025 ",
            "title": "Amer Ali Khan to Speak at APCR’s Hyderabad Event on Justice and Democracy.",
            "content1": "The Association for Protection of Civil Rights (APCR), Hyderabad Chapter, is set to host an insightful discussion on the theme 'Making Sense of Justice in Changing Democracy'. The event, scheduled to take place at Nehru Auditorium, Madina Education Centre, Nampally, will bring together prominent activists, legal experts, and thought leaders to address the evolving nature of justice in contemporary democracy.",
            "content2": "One of the key speakers at the event is Amer Ali Khan, a respected journalist, MLC (Member of Legislative Council), and News Editor at Siasat. With his vast experience in journalism and politics, Amer Ali Khan is expected to offer a unique perspective on media’s role in safeguarding democracy, addressing civil rights violations, and fostering informed public discourse.",
            "subheading1": "A Voice for Justice and Civil Rights",
            "subcontent11": "Amer Ali Khan, known for his fearless journalism, has been a vocal advocate for marginalized communities. As a news editor at Siasat, a leading Urdu daily, he has consistently highlighted social injustices, governmental policies, and human rights issues affecting various sections of society. His ability to present facts with clarity and integrity has earned him a reputation as a journalist who stands for truth and justice.",
            "subcontent12": "",
            "subcontent13": "",
            "subheading2": "The Significance of the Event",
            "subcontent21": "The APCR event will feature a distinguished panel, including: Prof. Gali Vinod Kumar (Former Dean, Faculty of Law, OU), Adv. V. Raghunath (Senior Advocate & Former President, THCAA), Dr. Jasveen Jairath (Social & Environmental Activist), Nadeem Khan (Social Activist & National Secretary, APCR), Ravi Kanneganti (Activist & Co-Founder, Rythu Swarajya Vedika).",
            "subcontent22": "Moderated by Adv. Anees Ahmed, the discussion aims to explore challenges in upholding justice amid shifting political landscapes, the role of the judiciary, and the responsibilities of media and civil rights organizations in a changing democracy.",
            "subcontent23": "",
            "subheading3": "Why Amer Ali Khan’s Role Matters?",
            "subcontent31": "As both a politician and a media personality, Amer Ali Khan brings a dual perspective to the conversation. His background in journalism enables him to critically analyze political developments, while his experience as an MLC allows him to understand legislative and policy-making intricacies. His presence at the event underscores the critical role of free press and independent journalism in ensuring a just and democratic society.",
            "subcontent32": "",
            "subcontent33": "",
            "image_url1": "assets/images/a2.jpeg",
            "image_url2": "assets/images/a2.jpeg"
        },
        {
            "id": "4",
            "date": "Hyderabad, February 22, 2025 ",
            "title": "S-Hub Collaborates with TOMCOM to Boost Employment Opportunities for Minorities in Telangana",
            "content1": "In a landmark initiative aimed at empowering minorities in Telangana, S-Hub, the newly proposed innovation and skill development center, is set to collaborate with the Telangana Overseas Manpower Company Limited (TOMCOM) to enhance employment opportunities. Under the visionary leadership of Telangana MLC Amer Ali Khan, this collaboration is expected to provide skill training, overseas employment assistance, and job placement support to thousands of aspiring job seekers from minority communities.",
            "content2": "",
            "subheading1": "S-Hub: A Catalyst for Minority Empowerment",
            "subcontent11": "S-Hub, modeled after the successful T-Hub, aims to nurture startups, facilitate skill development, and bridge the employment gap for minorities, particularly Muslims. Recognizing the need for specialized training and employment programs, Amer Ali Khan has been actively working towards making S-Hub a premier institution that provides both technical and vocational education tailored to the evolving job market.",
            "subcontent12": "",
            "subcontent13": "",
            "subheading2": "TOMCOM’s Role in Enhancing Employment Prospects",
            "subcontent21": "TOMCOM, a government agency focused on overseas employment, plays a crucial role in placing skilled candidates in well-paying jobs abroad. The collaboration between S-Hub and TOMCOM will ensure that candidates receive internationally recognized training, job counseling, and direct access to overseas job opportunities. This partnership will particularly benefit skilled workers and professionals from minority backgrounds who face barriers in securing employment.",
            "subcontent22": "",
            "subcontent23": "",
            "subheading3": "Amer Ali Khan’s Vision for Minority Welfare",
            "subcontent31": "Amer Ali Khan has been a vocal advocate for minority empowerment through education, skill development, and employment. By driving the S-Hub initiative, he aims to create a sustainable ecosystem where minorities can gain financial independence and contribute to economic growth. His role in forging this partnership with TOMCOM highlights his commitment to bridging the socio-economic gap and ensuring that the youth from minority communities receive the right support to excel in their careers.",
            "subcontent32": "",
            "subcontent33": "",
            "image_url1": "assets/images/tomcom1.jpeg",
            "image_url2": "assets/images/tomcom2.jpeg"
        },
        {
            "id": "5",
            "date": "Hyderabad, February 27, 2025",
            "title": "Meenakshi Natarajan Joins TPCC Meeting: A Warm Welcome from Amer Ali Khan",
            "content1": "The Telangana Pradesh Congress Committee (TPCC) meeting witnessed a momentous occasion as Meenakshi Natarajan, Telangana In-Charge, participated in the discussions to strengthen the Congress party in the state. The event was marked by a grand welcome extended by Amer Ali Khan, Member of the Telangana Legislative Council (MLC), along with other prominent Congress leaders.",
            "content2": "",
            "subheading1": "A Leader Committed to Party Values",
            "subcontent11": "Meenakshi Natarajan is known for her deep-rooted commitment to the Congress party’s ideology, grassroots activism, and dedication to public welfare. As the newly appointed Telangana In-Charge, her presence at the TPCC meeting signifies a renewed focus on strengthening the party's foundation in the state.",
            "subcontent12": "Amer Ali Khan, a key leader in Telangana politics, welcomed Meenakshi Natarajan with enthusiasm, acknowledging her experience and leadership qualities. He expressed confidence that her strategic vision and commitment to Congress values would play a crucial role in revitalizing the party in Telangana.",
            "subcontent13": "",
            "subheading2": "Congress Leaders Unite for Telangana’s Political Future",
            "subcontent21": "The meeting saw the participation of several senior Congress leaders, including TPCC President Revanth Reddy, other state party officials, and national representatives. The discussions revolved around reviving grassroots-level engagement, mobilizing party workers, and formulating a strategy for the upcoming elections.",
            "subcontent22": "With Meenakshi Natarajan’s leadership, the Congress party aims to strengthen its political base, address key issues affecting the people of Telangana, and present a strong alternative to the ruling government.",
            "subcontent23": "",
            "subheading3": "Amer Ali Khan’s Continued Support for Congress",
            "subcontent31": "Amer Ali Khan has been actively involved in advocating for minority rights, social justice, and the empowerment of marginalized communities in Telangana. His role in welcoming Meenakshi Natarajan underscores his dedication to the party’s growth and his commitment to building a stronger Congress in the state.",
            "subcontent32": "As Telangana gears up for future political challenges, the coming together of influential leaders like Meenakshi Natarajan, Amer Ali Khan, and Revanth Reddy signals a unified Congress determined to reclaim its position in the state’s political landscape.",
            "subcontent33": "",
            "image_url1": "assets/images/meenakshi_tpcc.jpeg",
            "image_url2": ""
        },
        {
            "id": "6",
            "date": "Hyderabad, March 13, 2025",
            "title": "Congress MLC Amer Ali Khan Encourages Muslim Youth to Pursue Entrepreneurship",
            "content1": "Congress MLC Amer Ali Khan has called upon Muslim youth to embrace entrepreneurship as a means of achieving self-reliance and economic empowerment. Addressing a gathering, he emphasized the need for skill development, innovation, and government support to create sustainable business opportunities. Khan highlighted that entrepreneurship is a key driver of social progress and can help uplift the community by generating employment and fostering economic independence.",
            "content2": "He urged young individuals to explore opportunities in diverse industries, stressing that with proper guidance and perseverance, they can become successful entrepreneurs. Khan also emphasized the importance of education and technology in building strong business foundations.",
            "subheading1": "",
            "subcontent11": "His call to action aligns with ongoing efforts to encourage startups and small businesses, ensuring that young entrepreneurs contribute to the nation’s growth while strengthening their communities.",
            "subcontent12": "",
            "subcontent13": "",
            "subheading2": "",
            "subcontent21": "",
            "subcontent22": "",
            "subcontent23": "",
            "subheading3": "",
            "subcontent31": "",
            "subcontent32": "",
            "subcontent33": "",
            "image_url1": "assets/images/youth.jpeg",
            "image_url2": ""
        },
        
    ];

     // Dynamically load activities in activities.html
     const container = document.getElementById("activities-container");
     if (container) {
         activities.forEach(activity => {
             const activityHTML = `
                 <div class="col-sm-6 col-lg-4 grid-item">
                     <div class="card bg-transparent">
                         <div class="overflow-hidden rounded-3">
                             <img src="${activity.image_url1}" class="card-img" alt="course image">
                             <div class="bg-overlay bg-dark opacity-4"></div>
                         </div>
                         <div class="card-body-st px-3">
                             <h6 class="card-title"><a href="activitydetails.html?id=${activity.id}">${activity.title}</a></h6>
                         </div>
                     </div>
                 </div>`;
             container.innerHTML += activityHTML;
         });
     }

     // Load activity details in activitydetails.html
    if (activityId) {
        const activity = activities.find(a => a.id === activityId);
        if (activity) {
            document.getElementById("activity-title").textContent = activity.title;
            document.getElementById("activity-date").textContent = activity.date;
            document.getElementById("activity-content1").textContent = activity.content1;
            document.getElementById("activity-content2").textContent = activity.content2;
            document.getElementById("activity-sub-heading1").textContent = activity.subheading1;
            document.getElementById("activity-sub-content11").textContent = activity.subcontent11;
            document.getElementById("activity-sub-content12").textContent = activity.subcontent12;
            document.getElementById("activity-sub-content13").textContent = activity.subcontent13;
            document.getElementById("activity-sub-content14").textContent = activity.subcontent14;
            document.getElementById("activity-sub-heading2").textContent = activity.subheading2;
            document.getElementById("activity-sub-content21").textContent = activity.subcontent21;
            document.getElementById("activity-sub-content22").textContent = activity.subcontent22;
            document.getElementById("activity-sub-content23").textContent = activity.subcontent23;
            document.getElementById("activity-sub-content24").textContent = activity.subcontent24;
            document.getElementById("activity-sub-heading3").textContent = activity.subheading3;
            document.getElementById("activity-sub-content31").textContent = activity.subcontent31;
            document.getElementById("activity-sub-content32").textContent = activity.subcontent32;
            document.getElementById("activity-sub-content33").textContent = activity.subcontent33;
            document.getElementById("activity-sub-content34").textContent = activity.subcontent34;
            document.getElementById("activity-image1").src = activity.image_url1;
            document.getElementById("activity-image2").src = activity.image_url2;
        } else {
            document.body.innerHTML = "<h2>Activity Not Found</h2>";
        }
    }

});
