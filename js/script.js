// window.addEventListener('scroll', function () {
//     const navbar = document.querySelector('.navbar');
//     const scrollPosition = window.scrollY;
//     const changeHeight = 270;  // Set the height to trigger the change (in pixels)
//     const midHeight = 1333;  // Set the height to trigger the white text color (in pixels)

//     // If the scroll position is below or equal to changeHeight (270px), text should be black
//     if (scrollPosition <= changeHeight) {
//         navbar.classList.add('text-black');  // Add black font color
//         navbar.classList.remove('text-white');  // Remove white font color
//     }
//     // If the scroll position is between changeHeight (270px) and midHeight (400px), text should be white
//     else if (scrollPosition > changeHeight && scrollPosition <= midHeight) {
//         navbar.classList.add('text-white');  // Add white font color
//         navbar.classList.remove('text-black');  // Remove black font color
//     }
//     // If the scroll position is greater than midHeight (400px), text should be black
//     else if (scrollPosition > midHeight) {
//         navbar.classList.add('text-black');  // Add black font color
//         navbar.classList.remove('text-white');  // Remove white font color
//     }
// });
