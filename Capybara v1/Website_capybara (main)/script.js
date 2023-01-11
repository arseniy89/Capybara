// onload = () => {
//     let el1 = document.querySelector('.heading');
//     let el2 = document.querySelector('.move');
//     let el3 = document.querySelector('.wrap');

//     const start = () => {
//         let h = window.innerWidth/12;
//         let elStyles1 = el1.style;
//         elStyles1.fontSize = `${h}px`;
//         elStyles1 = el1.style.cssText;
//         elStyles1.cssText = `font-size: ${h}px`;
//         // console.log(el1.style);

//         let w = window.innerWidth * 9 / 16;
//         let elStyles2 = el2.style;
//         elStyles2.marginTop = `${w}px`;
//         elStyles2 = el2.style.cssText;
//         elStyles2.cssText = 'margin-top: ${w}px';
//         // console.log(`w = ${window.innerWidth*9/16 - 93}`);
//         // console.log(`w-h'= ${w}`);

//         let elStyles3 = el3.style;
//         elStyles3.innerWidth = `${window.innerWidth}px`;
//         elStyles3 = el3.style.cssText;
//         elStyles3.cssText = 'width: ${window.innerWidth}px';
//     }

//     const Animation = t => {
//         start();
//         requestAnimationFrame(Animation);
//     }
//     Animation();
// }
