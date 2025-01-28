gsap
  .timeline({ repeat: -1 })
  .to(".st0", { fill: "#6a6f42", duration: 1, delay: 4, ease: "linear" })
  .to(".st0", { fill: "#506ab0", duration: 1, delay: 4, ease: "linear" })
  .to(".st0", { fill: "#f7bdc3", duration: 1, delay: 4, ease: "linear" })
  .to(".st0", { fill: "#393846", duration: 1, delay: 4, ease: "linear" });

gsap
  .timeline({ repeat: -1, repeatDelay: 1.5, repeatRefresh: true })
  .to(".letters", {
    opacity: 1,
    duration: 0.1,
    stagger: {
      each: 0.2,
    },
    delay: 1.5,
  })
  .to(".letters", {
    opacity: 0,
    duration: 0.1,
    stagger: {
      from: "random",
      amount: 1,
    },
    delay: 1.5,
  })
  .to(".letters_p2", {
    opacity: 1,
    duration: 0.1,
    stagger: {
      each: 0.2,
    },
    delay: 1.5,
  })
  .to(".letters_p2", {
    opacity: 0,
    duration: 0.1,
    stagger: {
      from: "random",
      amount: 1,
    },
    delay: 1.5,
  })
  .to(".letters_p3", {
    opacity: 1,
    duration: 0.1,
    stagger: {
      each: 0.2,
    },
    delay: 1.5,
  })
  .to(".letters_p3", {
    opacity: 0,
    duration: 0.1,
    stagger: {
      from: "random",
      amount: 1,
    },
    delay: 1.5,
  });
