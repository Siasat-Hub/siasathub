document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const activityId = params.get("id");

    // JSON Object storing all activity details
    const activities = [
        {
            "id": "1",
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
            "image_url": "assets/images/a1.jpeg"
        },
        {
            "id": "2",
            "date": "Hyderabad, February 16, 2025 ",
            "title": "Amir Ali Khan to Speak at APCR’s Hyderabad Event on Justice and Democracy.",
            "content1": "The Association for Protection of Civil Rights (APCR), Hyderabad Chapter, is set to host an insightful discussion on the theme 'Making Sense of Justice in Changing Democracy'. The event, scheduled to take place at Nehru Auditorium, Madina Education Centre, Nampally, will bring together prominent activists, legal experts, and thought leaders to address the evolving nature of justice in contemporary democracy.",
            "content2": "One of the key speakers at the event is Amir Ali Khan, a respected journalist, MLC (Member of Legislative Council), and News Editor at Siasat. With his vast experience in journalism and politics, Amir Ali Khan is expected to offer a unique perspective on media’s role in safeguarding democracy, addressing civil rights violations, and fostering informed public discourse.",
            "subheading1": "A Voice for Justice and Civil Rights",
            "subcontent11": "Amir Ali Khan, known for his fearless journalism, has been a vocal advocate for marginalized communities. As a news editor at Siasat, a leading Urdu daily, he has consistently highlighted social injustices, governmental policies, and human rights issues affecting various sections of society. His ability to present facts with clarity and integrity has earned him a reputation as a journalist who stands for truth and justice.",
            "subcontent12": "",
            "subcontent13": "",
            "subheading2": "The Significance of the Event",
            "subcontent21": "The APCR event will feature a distinguished panel, including: Prof. Gali Vinod Kumar (Former Dean, Faculty of Law, OU), Adv. V. Raghunath (Senior Advocate & Former President, THCAA), Dr. Jasveen Jairath (Social & Environmental Activist), Nadeem Khan (Social Activist & National Secretary, APCR), Ravi Kanneganti (Activist & Co-Founder, Rythu Swarajya Vedika).",
            "subcontent22": "Moderated by Adv. Anees Ahmed, the discussion aims to explore challenges in upholding justice amid shifting political landscapes, the role of the judiciary, and the responsibilities of media and civil rights organizations in a changing democracy.",
            "subcontent23": "",
            "subheading3": "Why Amir Ali Khan’s Role Matters?",
            "subcontent31": "As both a politician and a media personality, Amir Ali Khan brings a dual perspective to the conversation. His background in journalism enables him to critically analyze political developments, while his experience as an MLC allows him to understand legislative and policy-making intricacies. His presence at the event underscores the critical role of free press and independent journalism in ensuring a just and democratic society.",
            "subcontent32": "",
            "subcontent33": "",
            "image_url": "assets/images/a2.jpeg"
        }
    ];

    // Find the activity based on ID
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
        document.getElementById("activity-sub-heading2").textContent = activity.subheading2;
        document.getElementById("activity-sub-content21").textContent = activity.subcontent21;
        document.getElementById("activity-sub-content22").textContent = activity.subcontent22;
        document.getElementById("activity-sub-content23").textContent = activity.subcontent23;
        document.getElementById("activity-sub-heading3").textContent = activity.subheading3;
        document.getElementById("activity-sub-content31").textContent = activity.subcontent31;
        document.getElementById("activity-sub-content32").textContent = activity.subcontent32;
        document.getElementById("activity-sub-content33").textContent = activity.subcontent33;
        document.getElementById("activity-image").src = activity.image_url;
    } else {
        document.body.innerHTML = "<h2>Activity Not Found</h2>";
    }
});
