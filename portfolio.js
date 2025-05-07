function isMobile() {
  return window.innerWidth <= 768; // adjust breakpoint as needed
}

if (isMobile()) {
  console.log("Mobile view");
} else {
  console.log("Desktop view");
}