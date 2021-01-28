/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 *
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 *
 * This will be shown in this order: Step1, Step3, Step2. Step 2 is delayed by 2 second the setTimeout function so Sep 3 is ran before step2
 *
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 *
 * Step1, Step3, Step2
 *
 *
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 *
 * My guess is Step1, Step3, Step2. Because snooze may take longer than 0 section be cause it is a function
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
  setTimeout(function () {
    action()
  }, 0)
}
console.log("Step 1")

snooze(function () {
  console.log("Step 2")
  console.log("Async Action completed via callback")
})

console.log("Step 3")
