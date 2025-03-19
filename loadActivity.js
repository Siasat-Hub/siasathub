document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const activityId = params.get("id");

    // JSON Object storing all activity details
    const activities = [
        {
            "id": "m78he3kqe",
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
            "id": "2478rthnwv",
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
            "id": "k2opq42",
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
            "id": "o2ue9423ri",
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
            "id": "niqwfu32-",
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
            "id": "bctwflk-2fr",
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
        {
            "id": "ajsnf_",
            "date": "Hyderabad, March 17, 2025",
            "title": "Amer Ali Khan Urges Youth to Benefit from Rajiv Yuva Vikas Scheme",
            "content1": "In a significant move to empower unemployed youth in Telangana, Amer Ali Khan, Telangana MLC and Managing Editor of Siasat, has encouraged young individuals to take full advantage of the Rajiv Yuva Vikas Scheme. With a substantial budget allocation of Rs. 6,000 crore, this scheme aims to provide financial support to around five lakh eligible youth, enabling them to establish their own businesses and achieve financial independence.",
            "content2": "",
            "subheading1": "Empowering Youth Through Financial Assistance",
            "subcontent11": "Under this initiative, each eligible individual will receive Rs. 3 lakh through the SC, ST, BC, and Minority Finance Corporations. The funding is designed to help young entrepreneurs launch their own ventures, fostering self-reliance and economic growth across various communities in the state.",
            "subcontent12": "Speaking on the importance of the scheme, Amer Ali Khan emphasized the need for the youth to seize this golden opportunity. He highlighted how government-backed financial assistance can serve as a strong foundation for aspiring business owners, especially those struggling with limited access to capital.",
            "subcontent13": "",
            "subheading2": "Eligibility and Application Process",
            "subcontent21": "The Rajiv Yuva Vikas Scheme is open to unemployed youth from Scheduled Castes (SC), Scheduled Tribes (ST), Backward Classes (BC), and Minority communities. The application process is expected to be streamlined, with government agencies facilitating the selection and disbursement of funds. Eligible candidates will be required to submit their business proposals, which will be reviewed before approval.",
            "subcontent22": "The initiative is not only aimed at providing financial aid but also at encouraging entrepreneurship, reducing dependency on traditional employment opportunities, and uplifting marginalized communities. By enabling youth to start their own businesses, the scheme is expected to generate employment at the grassroots level, contributing to overall economic development in Telangana.",
            "subcontent23": "For online applications and detailed guidelines, interested candidates can visit the official government website: https://tgobmms.cgg.gov.in/.",
            "subheading3": "Amer Ali Khan’s Call to Action",
            "subcontent31": "Amer Ali Khan has urged youth across Telangana to come forward and apply for the scheme without hesitation. He stressed the importance of taking proactive steps toward self-employment and financial stability. His advocacy for such initiatives aligns with his broader vision of empowering minority communities and ensuring inclusive economic progress.",
            "subcontent32": "As Telangana moves towards greater economic self-sufficiency, schemes like Rajiv Yuva Vikas serve as a beacon of hope for thousands of young individuals aspiring to build their own futures. With the right guidance and support, this initiative could significantly transform the entrepreneurial landscape of the state.",
            "subcontent33": "",
            "image_url1": "assets/images/rajivyuvavikas.png",
            "image_url2": "assets/images/banner2.png"
        },
        {
            "id": "sbdfsyfhsak_u",
            "date": "Hyderabad, March 17, 2025",
            "title": "MLC Amer Ali Khan Demands Special Law to Protect Minorities in Telangana",
            "content1": "Congress MLC Amer Ali Khan has urged the Telangana government to introduce a special law to curb the rising attacks on minorities and ensure their safety. Raising the issue as a Special Mention in the Telangana Legislative Council, Amer Ali Khan expressed deep concern over the increasing incidents of violence targeting minority communities and called for immediate legislative action to safeguard their rights.",
            "content2": "",
            "subheading1": "Call for Legislative Protection",
            "subcontent11": "Amer Ali Khan highlighted the growing fear and insecurity among minorities due to sporadic incidents of violence. He noted that while the Congress-led government in Telangana is actively working for the welfare of minorities, the recurring attacks are undermining these efforts and creating a hostile environment for vulnerable communities.",
            "subcontent12": "He pointed out that even minor incidents were escalating into targeted assaults, raising serious concerns about the safety and dignity of minorities in the state. To address this issue, he proposed the introduction of a special law that would provide stronger legal protections, stricter punishments for hate crimes, and a more robust mechanism for preventing communal violence.",
            "subcontent13": "",
            "subheading2": "Ensuring Safety and Justice",
            "subcontent21": "Amer Ali Khan emphasized that the protection of minorities is not just a political issue but a fundamental human rights concern. He urged the Telangana government to take proactive steps to prevent hate crimes and ensure justice for the victims of violence. According to him, a special law could serve as a deterrent against communal attacks and reinforce the government's commitment to secularism and social harmony.",
            "subcontent22": "He also acknowledged the efforts of the Congress government in implementing welfare schemes and initiatives for minorities. However, he stressed that such welfare programs must be complemented by strong legal safeguards to ensure that minorities can live without fear and fully participate in the state’s progress.",
            "subcontent23": "",
            "subheading3": "Urgent Need for Action",
            "subcontent31": "Amer Ali Khan’s demand for a special legislation comes at a critical time when concerns about communal violence are increasing. He called upon all political parties, civil society organizations, and human rights activists to support this initiative and work collectively towards fostering an inclusive and peaceful Telangana.",
            "subcontent32": "",
            "subcontent33": "As Telangana continues its journey towards progress and development, the protection of its diverse communities remains a key priority. The introduction of a special law for minorities could be a significant step toward ensuring justice, equality, and security for all citizens of the state.",
            "image_url1": "assets/images/minorities-legislation.jpeg",
            "image_url2": ""
        },
        {
            "id": "mdbfufnsw8",
            "date": "Hyderabad, March 18, 2025",
            "title": "Amer Ali Khan Raises BC Quota Expansion to Aid Underprivileged Muslims in Telangana Assembly",
            "content1": "The Telangana Legislative Council witnessed a significant debate on Tuesday as Congress Member of the Legislative Council (MLC) Amer Ali Khan strongly advocated for an increase in reservations for Backward Classes (BC) to 42%. The proposed bill, aimed at ensuring equitable representation and economic upliftment, was presented by the Congress-led government under Chief Minister A Revanth Reddy.",
            "content2": "During his address, Amer Ali Khan termed the bill a historic step toward social justice, emphasizing the Congress government’s commitment to supporting marginalized communities. He noted that the government had conducted a comprehensive caste survey, revealing the necessity of increasing BC reservations in education, employment, and government services to correct historical injustices and disparities.",
            "subheading1": "Commitment to Muslim BCs",
            "subcontent11": "",
            "subcontent12": "Addressing concerns regarding Muslim BCs, Khan assured that the existing 4% reservation for them would remain separate and unaffected by the new policy. He reaffirmed that Muslim BCs have long been recognized as part of the broader BC category across India and that their dedicated sub-quota ensures they do not compete with other BC groups for reservations.",
            "subcontent13": "",
            "subheading2": "Criticism of Opposition Parties",
            "subcontent21": "In his speech, Amer Ali Khan criticized the Bharatiya Janata Party (BJP) for allegedly spreading misinformation aimed at creating divisions among BC communities. He also accused the Bharat Rashtra Samithi (BRS) of neglecting BC welfare during its decade-long rule, questioning why the BRS had not introduced the 42% reservation when it was in power.",
            "subcontent22": "“The previous government had ample opportunities to address the needs of BC communities but failed to take meaningful action,” Khan stated, challenging opposition leaders to support the bill in the interest of social equity.",
            "subcontent23": "",
            "subheading3": "A Step Towards Social Equity",
            "subcontent31": "The proposed increase in BC reservations is seen as a major political move by the Congress government, aligning with its broader agenda of social justice and empowerment. Amer Ali Khan urged all members of the Legislative Council to support the bill, highlighting its importance in ensuring fair representation and opportunities for BC communities, including economically disadvantaged Muslims.",
            "subcontent32": "As the legislative session progresses, the bill’s approval will mark a crucial milestone in Telangana’s commitment to affirmative action, ensuring a more inclusive and equitable society for all underrepresented groups.",
            "subcontent33": "",
            "image_url1": "assets/images/bcquota.jpg",
            "image_url2": ""
        },
        {
            "id": "asbf84344tr",
            "date": "Hyderabad, March 19, 2025",
            "title": "Telangana Minority Budget 2025: A Historic Allocation of ₹3,591 Crore for Community Development",
            "content1": "In a significant move towards the welfare of minorities, the Telangana government has announced an allocation of ₹3,591 crore in the state budget for the financial year 2025-26. This record-breaking minority budget aims to empower marginalized communities through education, employment, skill development, and social welfare initiatives.",
            "content2": "In a significant move towards the welfare of minorities, the Telangana government has announced an allocation of ₹3,591 crore in the state budget for the financial year 2025-26. This record-breaking minority budget aims to empower marginalized communities through education, employment, skill development, and social welfare initiatives.",
            "subheading1": "Key Highlights of the Budget Allocation",
            "subcontent11": "The budget focuses on addressing the socio-economic challenges faced by minority communities, particularly Muslims, and ensuring equitable opportunities for growth. A major portion of the budget has been earmarked for scholarships, fee reimbursement, and hostel facilities to support students from economically disadvantaged backgrounds. Minority Residential Schools and Junior Colleges will be strengthened to provide quality education.",
            "subcontent12": "Employment and skill development initiatives will see an expansion of training programs under the Telangana Minority Finance Corporation, which will provide financial assistance for self-employment. New skill development centers will be launched in collaboration with national and international organizations to enhance job opportunities for minority youth.",
            "subcontent13": "Infrastructure development will be supported through allocations for the construction and maintenance of religious and cultural centers that serve as hubs for community welfare programs. Additionally, modernization efforts for Waqf Board properties aim to generate revenue and benefit the community.",
            "subheading2": "",
            "subcontent21": "Healthcare and social welfare provisions will include special health schemes targeting minority women and children, ensuring better medical access and support. Financial assistance programs for underprivileged families will be introduced to uplift their living standards.",
            "subcontent22": "",
            "subcontent23": "",
            "subheading3": "Political Reactions and Future Implications",
            "subcontent31": "The budget has received widespread support from various community leaders and political representatives. Congress MLC Amer Ali Khan, a strong advocate for minority rights, praised the initiative, stating, “This budget reflects the Telangana government’s commitment to ensuring social justice and economic upliftment for minorities.” However, opposition parties have raised concerns about the effective implementation of the allocated funds, urging transparency and accountability in their distribution.",
            "subcontent32": "As the Telangana government moves forward with its ambitious plans for minority development, the ₹3,591 crore allocation marks a significant step in fostering inclusivity and empowering disadvantaged communities across the state. The success of these initiatives will depend on their execution and the government's ability to address long-standing socio-economic disparities.",
            "subcontent33": "",
            "image_url1": "assets/images/assemblybudget.jpeg",
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
            document.getElementById("og-title").setAttribute("content", activity.title);
            document.getElementById("og-description").setAttribute("content", activity.content1);
            document.getElementById("og-image").setAttribute("content", "https://www.siasathub.com/" + activity.image_url1);
            document.getElementById("og-url").setAttribute("content", window.location.href);
        } else {
            document.body.innerHTML = "<h2>Activity Not Found</h2>";
        }
    }

});
