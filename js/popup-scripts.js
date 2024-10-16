// Data array for sections with tags
const sectionsData = [
  {
    title: "Eco Measure Tech",
    image: "images/scientist in lab with pipette.webp",
    popupText:
      "Components I contributed to:  Header, Footer, Pages, Forms, Slider, Tab View \n\n" +
      "Tools / Plugins / Themes used: Astra, Elementor, Gutenberg, JetPack, Yoast SEO, Classic Editor, Contact Form 7, Contact Form CFDB7, Elementor Header & Footer Builder,  Font Awesome, etc.",
    tag: "wordpress",
  },
  {
    title: "Syndell Tech",
    image: "images/web_dev_re1.webp",
    popupText:
      "Components I contributed to: Carousel, header, footer, pages, blog page, forms, chat-box, slider \n\n" +
      "Tools / Plugins / Themes used: Astra, Figma, Elementor, NitroPack, chat-box, woo-commerce, wp-form, Yoast SEO, Akismet, Smash Balloon, WP Rocket, Sucuri, Slider Revolution, WP-Optimize, Contact Form 7, UpdraftPlus, Jetpack, google maps, google fonts, etc.",
    tag: "wordpress",
  },
  {
    title: "Associated Pediatric Dentistry",
    image: "images/apd.jpg",
    popupText:
      "Components I contributed to: Carousel, header, footer, pages, blog page, google review,  forms, slider, FAQ \n\n" +
      "Tools / Plugins / Themes used: Astra, Figma, Elementor, Essential Addons for Elementor, Gravity Forms, Yoast SEO, WP Rocket, Sucuri, Slider Revolution, google maps, google fonts, etc.",
    tag: "wordpress",
  },
  {
    title: "Lovell Hair Extensions",
    image: "images/lovell.jpg",
    popupText:
      "Components I contributed to: Carousel, header, footer, pages, forms, slider, filter, FAQ, \n\n" +
      "Tools / Plugins / Themes used: Astra, Figma, Elementor, woo-commerce, Sucuri, Slider Revolution, Contact Form 7, litespeed, google fonts, etc.",
    tag: "wordpress",
  },
  {
    title: "God's Outlet",
    image: "images/shopify.png",
    popupText:
      "Components I contributed to: Carousel, header, footer, pages, forms \n\n" +
      "Tools / Plugins / Themes used: Figma, Shopify, MailChimp,  google maps, google fonts, etc.",
    tag: "shopify",
  },
  {
    title: "The Heritage Bee",
    image: "images/heritage.png",
    popupText:
      "Components I contributed to: Header, Footer, Forms, Carousel,  Pages  \n\n" +
      "Tools / Plugins / Themes used: Figma, Shopify, MailChimp,  google maps, google fonts, etc.",
    tag: "shopify",
  },
  {
    title: "Mountaineer Brand",
    image: "images/essential_box.jpg",
    popupText:
      "Components I contributed to: Header, Footer, Carousel, Forms, Pages \n\n" +
      "Tools / Plugins / Themes used: Figma, Shopify, MailChimp,  google maps, google fonts, Smile App, vital, elfsight, etc.",
    tag: "shopify",
  },
  {
    title: "Sneaky Snake Club",
    image: "images/sneaky_club.webp",
    popupText:
      "Components I contributed to: Header, Footer, Page \n\n" +
      "Tools / Plugins / Themes used: Astra, Figma, Essential Addons for Elementor, Elementor, google fonts, etc.",
    tag: "wordpress",
  },
];

// Function to create sections dynamically
function createSections(filterTag = "all") {
  const container = document.getElementById("sections-container");
  container.innerHTML = ""; // Clear existing sections

  sectionsData.forEach((section, index) => {
    // Filter based on tag
    if (filterTag !== "all" && section.tag != filterTag) {
      return; // Skip this section if it doesn't match the filter
    }

    // Create section div
    const sectionDiv = document.createElement("div");
    sectionDiv.classList.add(
      "single-portfolio",
      "col-sm-4",
      "all",
      section.tag
    );
    sectionDiv.dataset.index = index; // Attach the index for later use

    const relativeDiv = document.createElement("div");
    relativeDiv.classList.add("relative");

    const thumbDiv = document.createElement("div");
    thumbDiv.classList.add("thumb");

    const overlayDiv = document.createElement("div");
    overlayDiv.classList.add("overlay");
    overlayDiv.classList.add("overlay-bg");
    thumbDiv.appendChild(overlayDiv);

    // Add image
    const img = document.createElement("img");
    img.src = section.image;
    img.alt = section.title;
    img.classList.add("image");
    img.classList.add("img-fluid");
    thumbDiv.appendChild(img);
    relativeDiv.appendChild(thumbDiv);
    sectionDiv.appendChild(relativeDiv);

    const p_innerDiv = document.createElement("div");
    p_innerDiv.classList.add("p-inner");

    // Add title
    const title = document.createElement("h4");
    title.innerText = section.title;

    const cat = document.createElement("div");
    cat.classList.add("cat");
    cat.innerHTML = section.tag;

    p_innerDiv.appendChild(title);
    p_innerDiv.appendChild(cat);
    sectionDiv.appendChild(p_innerDiv);

    // Append section to container
    container.appendChild(sectionDiv);

    // Add click event listener to open popup
    sectionDiv.addEventListener("click", () => openPopup(index));
  });
}

// Function to open popup with specific content
function openPopup(index) {
  const popup = document.getElementById("popup");
  const popupTitle = document.getElementById("popup-title");
  const popupText = document.getElementById("popup-text");

  // Set the popup content from the section's data
  popupTitle.innerText = sectionsData[index].title;
  popupText.innerText = sectionsData[index].popupText;

  // Show the popup
  popup.style.display = "block";
}

// Function to close the popup
document.getElementById("close-btn").addEventListener("click", () => {
  document.getElementById("popup").style.display = "none";
});

// Close popup if user clicks outside the popup content
window.addEventListener("click", (event) => {
  const popup = document.getElementById("popup");
  if (event.target === popup) {
    popup.style.display = "none";
  }
});

function portfolioMasonry() {
  $(".filters ul li").click(function () {
    $(".filters ul li").removeClass("active");
    $(this).addClass("active");

    var data = $(this).attr("data-filter");
    $grid.isotope({
      filter: data,
    });
  });

  if (document.getElementById("section-portfolio")) {
    var $grid = $(".grid").isotope({
      itemSelector: ".all",
      percentPosition: true,
      masonry: {
        columnWidth: ".all",
      },
    });
  }
}

// Create the sections when the page loads
window.onload = () => {
  createSections(); // Load all sections initially
  setTimeout(portfolioMasonry(), 500);
};
