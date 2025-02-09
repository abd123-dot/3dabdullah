document.addEventListener("DOMContentLoaded", () => {
    // Modal functionality for gallery models
    const modal = document.getElementById("model-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalImage = document.getElementById("modal-image");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = document.querySelector(".close");
  
    const openModal = (card) => {
      const name = card.getAttribute("data-name");
      const description = card.getAttribute("data-description");
      const image = card.getAttribute("data-image");
  
      modalTitle.textContent = name;
      modalImage.src = image;
      modalDescription.textContent = description;
      modal.classList.add("show");
    };
  
    const hideModal = () => {
      modal.classList.remove("show");
    };
  
    document.querySelectorAll(".model-card").forEach((card) => {
      card.addEventListener("click", () => openModal(card));
    });
  
    closeModal.addEventListener("click", hideModal);
    window.addEventListener("click", (event) => {
      if (event.target === modal) hideModal();
    });
  
    // Truck slider functionality
    const truckSlides = document.querySelectorAll(".truck-slide");
    let currentSlide = 0;
    if (truckSlides.length > 0) {
      truckSlides[0].classList.add("active");
      setInterval(() => {
        truckSlides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % truckSlides.length;
        truckSlides[currentSlide].classList.add("active");
      }, 3000); // Change slide every 3 seconds
    }
  });
  