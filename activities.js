document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const activityId = params.get("id");

    const activities = [
        {
            "id": "1",
            "date": "Hyderabad, 7th February 2025",
            "title": "The Consulate General of the Islamic Republic of Iran in Hyderabad Celebrates 46th National Day",
            "content1": "The Consulate General of the Islamic Republic of Iran in Hyderabad commemorated its 46th National Day on 7th February 2025...",
            "image_url1": "assets/images/a1.jpeg",
            "image_url2": "assets/images/a1.jpeg"
        },
        {
            "id": "2",
            "date": "Hyderabad, February 16, 2025",
            "title": "Amer Ali Khan to Speak at APCR’s Hyderabad Event on Justice and Democracy",
            "content1": "The Association for Protection of Civil Rights (APCR), Hyderabad Chapter, is set to host an insightful discussion...",
            "image_url1": "assets/images/a2.jpeg",
            "image_url2": "assets/images/a2.jpeg"
        },
        {
            "id": "3",
            "date": "Hyderabad, February 22, 2025",
            "title": "S-Hub Collaborates with TOMCOM to Boost Employment Opportunities for Minorities in Telangana",
            "content1": "In a landmark initiative aimed at empowering minorities in Telangana, S-Hub is set to collaborate with TOMCOM...",
            "image_url1": "assets/images/tomcom1.jpeg",
            "image_url2": "assets/images/tomcom2.jpeg"
        }
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
            document.getElementById("activity-image1").src = activity.image_url1;
            document.getElementById("activity-image2").src = activity.image_url2;
        } else {
            document.body.innerHTML = "<h2>Activity Not Found</h2>";
        }
    }
});
