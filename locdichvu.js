document.getElementById("apply-filters").addEventListener("click", function () {
  const hotels = document.querySelectorAll(".tsa1.hotel");
  const checkedStars = Array.from(
    document.querySelectorAll("input[id^='star-']:checked")
  ).map((cb) => cb.id);
  const checkedTypes = Array.from(
    document.querySelectorAll("input[id^='type-']:checked")
  ).map((cb) => cb.id);
  const checkedPrices = Array.from(
    document.querySelectorAll("input[id^='price-']:checked")
  ).map((cb) => cb.id);
  const checkedRatings = Array.from(
    document.querySelectorAll("input[id^='rating-']:checked")
  ).map((cb) => cb.id);
  hotels.forEach(function (hotel) {
    let show = true;
    if (
      checkedStars.length > 0 &&
      !checkedStars.some((id) => hotel.classList.contains(id))
    )
      show = false;
    if (
      checkedTypes.length > 0 &&
      !checkedTypes.some((id) => hotel.classList.contains(id))
    )
      show = false;
    if (
      checkedPrices.length > 0 &&
      !checkedPrices.some((id) => hotel.classList.contains(id))
    )
      show = false;
    if (
      checkedRatings.length > 0 &&
      !checkedRatings.some((id) => hotel.classList.contains(id))
    )
      show = false;
    hotel.style.display = show ? "flex" : "none";
  });
});
