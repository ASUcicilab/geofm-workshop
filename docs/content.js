// Note: docs/assets/intro.md lists May 12, 2026, while the flyer image shows May 8, 2026.
// Keep the correct final date here so the page stays consistent.
const workshop = {
  title: "ASU Workshop on Geospatial AI Foundation Models",
  summary:
    "An overview and hands-on introduction to geospatial foundation models for Earth observation, with a focus on practical research workflows and reusable workshop materials.",
  figureDescription:
    "Use this slot for a standalone workflow figure adapted from the flyer, such as the Earth observation to GeoFM to downstream tasks pipeline, without embedding the full poster.",
  date: "May 12, 2026",
  time: "12:00 PM to 3:00 PM",
  location: "ASU Campus, COOR Hall 5505",
  registrationUrl: "https://example.com/register",
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
      name: "Instructor One",
      role: "Lead instructor, ASU",
      bio:
        "Add a short bio here describing research area, lab affiliation, and why this instructor is relevant to the workshop. This card is already wired to show a portrait once you add a local image path.",
      photo: "",
      links: [
        { label: "Profile", url: "https://example.com/profile" }
      ]
    },
    {
      name: "Instructor Two",
      role: "Co-instructor, ASU",
      bio:
        "Add a second short bio here. The layout supports two instructors now and will scale if you add more objects to the array below.",
      photo: "",
      links: [
        { label: "Profile", url: "https://example.com/profile" }
      ]
    }
  ],
  papers: [
    {
      title: "Add your first workshop-related paper here",
      authors: "Author list",
      venue: "Conference or journal",
      description:
        "Summarize why this paper matters for workshop participants and what part of the workshop it connects to.",
      url: "https://example.com/paper-1"
    },
    {
      title: "Add another related paper",
      authors: "Author list",
      venue: "Conference or journal",
      description:
        "Use this section to link the workshop to your research output, datasets, or benchmark work.",
      url: "https://example.com/paper-2"
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
  setText("figure-description", workshop.figureDescription);

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

    const meta = document.createElement("div");
    meta.className = "instructor-meta";

    const name = document.createElement("h3");
    name.textContent = instructor.name;

    const role = document.createElement("p");
    role.className = "instructor-role";
    role.textContent = instructor.role;

    const bio = document.createElement("p");
    bio.textContent = instructor.bio;

    meta.append(name, role, bio);

    if (Array.isArray(instructor.links) && instructor.links.length > 0) {
      const linkRow = document.createElement("div");
      linkRow.className = "instructor-links";
      instructor.links.forEach((item) => {
        linkRow.appendChild(createTextLink(item.label, item.url));
      });
      meta.appendChild(linkRow);
    }

    card.append(media, meta);
    container.appendChild(card);
  });
}

function renderPapers() {
  const container = document.getElementById("paper-grid");

  workshop.papers.forEach((paper) => {
    const card = document.createElement("article");
    card.className = "paper-card";

    const title = document.createElement("h3");
    title.textContent = paper.title;

    const meta = document.createElement("p");
    meta.className = "paper-meta";
    meta.textContent = `${paper.authors} • ${paper.venue}`;

    const description = document.createElement("p");
    description.textContent = paper.description;

    card.append(title, meta, description);

    if (paper.url) {
      const links = document.createElement("div");
      links.className = "paper-links";
      links.appendChild(createTextLink("Read paper", paper.url));
      card.appendChild(links);
    }

    container.appendChild(card);
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

  const repoLinks = ["repo-link", "repo-material-link"];
  repoLinks.forEach((id) => {
    const link = document.getElementById(id);
    link.href = workshop.repositoryUrl;
    link.target = "_blank";
    link.rel = "noreferrer";
  });

  setText(
    "registration-copy",
    `The current workshop plan lists ${workshop.date} from ${workshop.time} at ${workshop.location}. Update the registration URL in docs/content.js when the final form is available.`
  );
  setText(
    "repo-copy",
    "Use the GitHub repository for notebooks, setup notes, slide references, and any datasets or utilities you want participants to access before or after the workshop."
  );
}

renderOverview();
renderInstructors();
renderPapers();
renderLinks();
