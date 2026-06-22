function isMobile() {
  return window.innerWidth <= 768; // adjust breakpoint as needed
}

function copyPhoneNumber() {
  const phoneNumber = "+8801711222950";
  navigator.clipboard.writeText(phoneNumber).then(() => {
    alert("Phone number copied to clipboard!");
  }).catch(err => {
    console.error("Failed to copy: ", err);
  });
}

if (isMobile()) {
  console.log("Mobile view");
} else {
  console.log("Desktop view");
}