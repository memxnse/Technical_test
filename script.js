document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector('.sidebar');

  // Get the initial width of the sidebar to be equal to the window width
  sidebar.style.width = window.innerWidth + 'px';

  // Use setTimeout to delay the transition to 25% after 3 seconds
  setTimeout(function () {
    sidebar.style.transition = 'width 0.5s ease';
    sidebar.style.width = '25%';
  }, 3000); // The sidebar will change width after 3 seconds (3000 milliseconds)
});

// let array = []

// async function fetch_competition() {
  // const url = 'https://football98.p.rapidapi.com/competitions';
  // console.log(url);
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '2d6f2fa199msh3aeca0e03c58ea8p141364jsn129cec6055bc',
  //     'X-RapidAPI-Host': 'football98.p.rapidapi.com'
  //   }
  // };

  // try {
  //   const response = await fetch(url, options);
  //   const result = await response.json()
  //   console.log(result);

  //   array = result.data;
  //   // findElemAndDisplay()
  // } catch (error) {
  //   console.error(error);
  // }

//   const url = 'https://football98.p.rapidapi.com/premierleague/news';
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '2d6f2fa199msh3aeca0e03c58ea8p141364jsn129cec6055bc',
//       'X-RapidAPI-Host': 'football98.p.rapidapi.com'
//     }
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

// function findElemAndDisplay(name) {
//   if (array.find(name)) {
//     console.log("ok");
//   } else {
//     console.log("ko");

//   }

//   const url = 'https://api-nba-v1.p.rapidapi.com/leagues';
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '2d6f2fa199msh3aeca0e03c58ea8p141364jsn129cec6055bc',
//       'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
//     }
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }
