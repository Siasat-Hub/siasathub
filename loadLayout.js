async function loadLayout() {
  try {
    const response = await fetch("./layout.html");
    if (!response.ok) {
      throw new Error(`Failed to load layout: ${response.statusText}`);
    }

    const layoutHTML = await response.text();
    const parser = new DOMParser();
    const layoutDoc = parser.parseFromString(layoutHTML, "text/html");

    // Extract <head> content
    const headContent = layoutDoc.head.innerHTML;
    document.head.innerHTML += headContent;

    // Extract <body> content without overwriting existing <main>
    const bodyContent = layoutDoc.body;
    const header = bodyContent.querySelector("#header");
    const footer = bodyContent.querySelector("#footer");

    if (header) {
      document.body.insertBefore(header, document.body.firstChild);
    }

    if (footer) {
      document.body.appendChild(footer);
    }

    loadPageSpecificMainContent();
  } catch (error) {
    console.error("Error loading layout:", error);
  }
}

function loadPageSpecificMainContent() {
  const mainContent = document.querySelector("main");
  const layoutMain = document.getElementById("main-content");

  if (mainContent && layoutMain) {
    layoutMain.innerHTML = mainContent.innerHTML;
  }
}

document.addEventListener("DOMContentLoaded", loadLayout);
