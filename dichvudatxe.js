document.addEventListener("DOMContentLoaded", () => {
  const btnFilter = document.getElementById("apply-filters");
  const vehicles = document.querySelectorAll(".vehicle");
  const container = document.querySelector(".row-vehicles");
  btnFilter.addEventListener("click", () => {
    const checkedTypes = Array.from(
      document.querySelectorAll('[data-filter="type"]:checked')
    ).map((cb) => cb.value);
    const checkedPeople = Array.from(
      document.querySelectorAll('[data-filter="people"]:checked')
    ).map((cb) => cb.value);

    let filtered = [...vehicles];
    if (checkedTypes.length) {
      filtered = filtered.filter((v) =>
        checkedTypes.includes(
          v.querySelector(".vehicle-title").textContent.split(" - ")[0]
        )
      );
    }

    // Lọc theo số người
    if (checkedPeople.length) {
      filtered = filtered.filter((v) => {
        const people = parseInt(v.dataset.people);
        return checkedPeople.some((range) => {
          if (range === "1-2") return people <= 2;
          if (range === "3-4") return people >= 3 && people <= 4;
          if (range === "5+") return people >= 5;
        });
      });
    }
    vehicles.forEach((v) => (v.style.display = "none"));
    filtered.forEach((v) => {
      v.style.display = "block";
      container.appendChild(v);
    });
  });
});
