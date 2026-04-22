// Note: docs/assets/intro.md lists May 12, 2026, while the flyer image shows May 8, 2026.
// Keep the correct final date here so the page stays consistent.
const workshop = {
  title: "ASU Workshop on Geospatial AI Foundation Models",
  summary:
    "An overview and hands-on introduction to geospatial foundation models for Earth observation, with a focus on practical research workflows and reusable workshop materials.",
  figureImage: "./assets/geofm-figure.png",
  date: "May 12, 2026",
  time: "12:00 PM to 3:00 PM",
  location: "ASU Campus, COOR Hall 5505",
  registrationUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfkcQT_GJgQQjN0l3MjEv0dlKvx-U5nkDsGSxmA7dDzWdUbuA/viewform",
  repositoryUrl: "https://github.com/your-org/geofm-workshop",
  overview: [
    "Geospatial AI foundation models (GeoFM) are rapidly reshaping how we analyze and understand Earth observation data. Award-winning models such as NASA-IBM's Prithvi-EO-2.0 learn from global-scale data to capture rich geospatial knowledge and enable a wide range of downstream applications, including flood and landslide mapping, wildfire fuel characterization, change detection, and long-term land use and land cover analysis.",
    "This workshop is designed as a concise, research-oriented introduction for ASU faculty, students, researchers, and local participants who want both conceptual grounding and a practical path into GeoFM workflows."
  ],
  highlights: [
    "A compact introduction to GeoFM concepts, model families, and Earth observation use cases.",
    "Hands-on guidance using notebooks and reusable examples from the workshop repository.",
    "Discussion of downstream applications such as flood mapping, wildfire analysis, landslides, and land use or land cover tasks.",
    "Pointers to the team’s related papers so attendees can continue from workshop examples into current research."
  ],
  instructors: [
    {
      name: "Prof. Wenwen Li",
      role: "Co-instructor, ASU",
      bio:
        "Wenwen Li received the Ph.D. degree in Earth system and geoinformation science from George Mason University, Fairfax, VA, USA, in 2019. She is currently a Professor of geographic information science with the School of Geographical Sciences and Urban Planning, Arizona State University, Tempe, AZ, USA, where she also directs the Spatial Analysis Research Center and the Cyberinfrastructure and Computational Intelligence Lab. Her research interests include cyberinfrastructure, geospatial big data, geospatial artificial intelligence (GeoAI), and their applications in data-intensive environmental and social sciences.",
      photo: "./assets/wenwen.jpeg",
      links: [
        { label: "Profile", url: "https://geoai4earth.github.io/" }
      ]
    },
    {
      name: "Dr. Hyunho Lee",
      role: "Co-instructor, ASU",
      bio:
        "Hyunho Lee is a GeoAI (Geospatial Artificial Intelligence) expert specializing in satellite-based flood mapping. He holds a PhD in Geographic Information Science from Arizona State University (ASU). His research focuses on deep learning for geospatial data, particularly satellite imagery, with an emphasis on model interpretability for intelligent environmental mapping.",
      photo: "./assets/hyunho.png",
      links: [
        {
          label: "Profile",
          url: "https://hyunholee26.github.io"
        }
      ]
    },
    {
      name: "Sizhe Wang",
      role: "Hands-on support staff",
      bio: "Sizhe Wang received the master’s degree in geography from Arizona State University, Tempe, AZ, USA, in 2016, where he is currently pursuing the Ph.D. degree in computer science. His research focuses on geospatial artificial intelligence (GeoAI), machine learning, and geospatial data analysis, with applications in environmental monitoring, terrain classification, and permafrost feature detection. He is also exploring the integration of knowledge graphs and spatial data fusion to enhance AI models in various geospatial contexts.",
      photo: "./assets/Wang.jpeg",
      links: [
        {
          label: "Profile",
          url: "https://scholar.google.com/citations?user=bucEAU0AAAAJ"
        }
      ]
    },
    {
      name: "Chia-Yu Hsu",
      role: "Hands-on support staff",
      bio: "Chia-Yu Hsu received the master’s degree in computer science from Arizona State University, Tempe, AZ, USA, in 2018. He is currently a Research Professional at Arizona State University. His research interests focus on applying machine learning and artificial intelligence techniques to address geographical big data challenges. In recent years, his work has emphasized geospatial artificial intelligence (GeoAI), including developing foundation models for Earth observation, advancing Arctic science with AI, and enhancing explainability in deep learning for geospatial applications.",
      photo: "./assets/Hsu.jpeg",
      links: [
        {
          label: "Profile",
          url: "https://scholar.google.com/citations?user=AMLwVyMAAAAJ"
        }
      ]
    }
  ],
  papers: [
    {
      citation:
        "Szwarcman, D., Roy, S., Fraccaro, P., Gislason, O. E., Blumenstiel, B., Ghosal, R., ... & Moreno, J. B. (2025). Prithvi-EO-2.0: A versatile multi-temporal foundation model for Earth observation applications. IEEE Transactions on Geoscience and Remote Sensing.",
      url: "https://github.com/NASA-IMPACT/Prithvi-EO-2.0"
    },
    {
      citation:
        "Li, W., Wang, S., Lee, H., Lu, C., Roy, S., Ramachandran, R., & Hsu, C. Y. (2025). Landslide Hazard Mapping with Geospatial Foundation Models: Geographical Generalizability, Data Scarcity, and Band Adaptability. arXiv preprint arXiv:2511.04474.",
      url: "https://arxiv.org/abs/2511.04474"
    }
  ]
};

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
}

function createFactCard(label, value) {
  const card = document.createElement("article");
  card.className = "fact-card";

  const labelNode = document.createElement("p");
  labelNode.className = "fact-label";
  labelNode.textContent = label;

  const valueNode = document.createElement("p");
  valueNode.className = "fact-value";
  valueNode.textContent = value;

  card.append(labelNode, valueNode);
  return card;
}

function createTextLink(label, url) {
  const link = document.createElement("a");
  link.className = "text-link";
  link.href = url;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.textContent = label;
  return link;
}

function initialsFromName(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function renderOverview() {
  setText("workshop-title", workshop.title);
  setText("hero-summary", workshop.summary);

  const figureArt = document.getElementById("figure-art");
  const figureImage = document.getElementById("figure-image");
  if (figureArt && figureImage && workshop.figureImage) {
    figureImage.src = workshop.figureImage;
    figureImage.addEventListener("load", () => {
      figureImage.classList.remove("is-hidden");
      figureArt.classList.add("has-image");
      figureArt.setAttribute("aria-hidden", "false");
    });
    figureImage.addEventListener("error", () => {
      figureImage.classList.add("is-hidden");
      figureArt.classList.remove("has-image");
      figureArt.setAttribute("aria-hidden", "true");
    });
  }

  const factGrid = document.getElementById("fact-grid");
  [
    ["Date", workshop.date],
    ["Time", workshop.time],
    ["Location", workshop.location],
    ["Audience", "ASU and local participants"]
  ].forEach(([label, value]) => factGrid.appendChild(createFactCard(label, value)));

  const overviewCopy = document.getElementById("overview-copy");
  workshop.overview.forEach((paragraph) => {
    const node = document.createElement("p");
    node.textContent = paragraph;
    overviewCopy.appendChild(node);
  });

  const highlightList = document.getElementById("highlights-list");
  workshop.highlights.forEach((item) => {
    const node = document.createElement("li");
    node.textContent = item;
    highlightList.appendChild(node);
  });
}

function renderInstructors() {
  const container = document.getElementById("instructor-grid");

  workshop.instructors.forEach((instructor) => {
    const card = document.createElement("article");
    card.className = "instructor-card";

    let media;
    if (instructor.photo) {
      media = document.createElement("img");
      media.className = "instructor-photo";
      media.src = instructor.photo;
      media.alt = `${instructor.name} portrait`;
    } else {
      media = document.createElement("div");
      media.className = "avatar-fallback";
      media.setAttribute("aria-hidden", "true");
      media.textContent = initialsFromName(instructor.name || "I");
    }
    media.classList.add("instructor-media");

    const header = document.createElement("div");
    header.className = "instructor-header";

    const name = document.createElement("h3");
    name.textContent = instructor.name;

    const role = document.createElement("p");
    role.className = "instructor-role";
    role.textContent = instructor.role;

    header.append(name, role);

    const body = document.createElement("div");
    body.className = "instructor-body";

    if (instructor.bio) {
      const bio = document.createElement("p");
      bio.textContent = instructor.bio;
      body.appendChild(bio);
    }

    if (Array.isArray(instructor.links) && instructor.links.length > 0) {
      const linkRow = document.createElement("div");
      linkRow.className = "instructor-links";
      instructor.links.forEach((item) => {
        linkRow.appendChild(createTextLink(item.label, item.url));
      });
      body.appendChild(linkRow);
    }

    card.append(media, header, body);
    container.appendChild(card);
  });
}

function renderPapers() {
  const container = document.getElementById("paper-grid");

  workshop.papers.forEach((paper) => {
    const item = document.createElement("li");
    item.className = "reference-item";
    item.textContent = paper.citation;

    if (paper.url) {
      item.appendChild(document.createTextNode(" "));
      const link = document.createElement("a");
      link.href = paper.url;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = "[link]";
      item.appendChild(link);
    }

    container.appendChild(item);
  });
}

function renderLinks() {
  const registerLinks = ["register-link", "registration-cta"];
  registerLinks.forEach((id) => {
    const link = document.getElementById(id);
    link.href = workshop.registrationUrl;
    link.target = "_blank";
    link.rel = "noreferrer";
  });

  setText(
    "registration-copy",
    "This in-person workshop will take place on May 12, 2026, from 12:00 PM to 3:00 PM at COOR Hall, Room 5505, on the ASU Tempe campus. Lunch will be provided, and seats are limited. Register by May 8 to secure a spot!"
  );
  setText(
    "repo-copy",
    "Workshop notebooks, example code, and supporting materials will be shared through the GitHub repository."
  );
}

renderOverview();
renderInstructors();
renderPapers();
renderLinks();
