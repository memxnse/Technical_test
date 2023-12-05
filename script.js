// document.addEventListener("DOMContentLoaded", function () {
//   const sidebar = document.querySelector('.sidebar');

//   // Get the initial width of the sidebar to be equal to the window width
//   sidebar.style.width = window.innerWidth + 'px';

//   // Use setTimeout to delay the transition to 25% after 3 seconds
//   setTimeout(function () {
//     sidebar.style.transition = 'width 0.5s ease';
//     sidebar.style.width = '25%';
//     background: url("images/basketball.jpg") no-repeat 50%/cover;
//   }, 3000); // The sidebar will change width after 3 seconds (3000 milliseconds)
// });

document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector('.sidebarfoot');
  const navLinks = sidebar.querySelectorAll('.nav a');

  // Get the initial width of the sidebar to be equal to the window width
  sidebar.style.width = window.innerWidth + 'px';

  // Use setTimeout to delay the transition to 25% after 3 seconds
  setTimeout(function () {
    sidebar.style.transition = 'width 0.5s ease';
    sidebar.style.width = '25%';
    sidebar.style.background = 'url("images/football.jpg") no-repeat 50%/cover';

    navLinks.forEach(function(link) {
      link.style.color = 'green';
    });
  }, 3000); // The sidebar will change width after 3 seconds (3000 milliseconds)
});

document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector('.sidebarbasket');
  const navLinks = sidebar.querySelectorAll('.nav a');

  // Get the initial width of the sidebar to be equal to the window width
  sidebar.style.width = window.innerWidth + 'px';

  // Use setTimeout to delay the transition to 25% after 3 seconds
  setTimeout(function () {
    sidebar.style.transition = 'width 0.5s ease';
    sidebar.style.width = '25%';
    sidebar.style.background = 'url("images/basketball.jpg") no-repeat 50%/cover';
    
    navLinks.forEach(function(link) {
      link.style.color = '#000';
    });
    // <p>404 error: Oops The informations you are seekeing are not available! Don't worry it's out issue</p>
  }, 3000); // The sidebar will change width after 3 seconds (3000 milliseconds)
});

document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector('.sidebartennis');
  const navLinks = sidebar.querySelectorAll('.nav a');

  // Get the initial width of the sidebar to be equal to the window width
  sidebar.style.width = window.innerWidth + 'px';

  // Use setTimeout to delay the transition to 25% after 3 seconds
  setTimeout(function () {
    sidebar.style.transition = 'width 0.5s ease';
    sidebar.style.width = '25%';
    sidebar.style.background = 'url("images/tennisball.jpg") no-repeat 50%/cover';

    // Change the color of the links
    navLinks.forEach(function(link) {
      link.style.color = '#000';
    });
  }, 3000); // The sidebar will change width after 3 seconds (3000 milliseconds)
});

document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector('.sidebarhockey');
  const navLinks = sidebar.querySelectorAll('.nav a');

  // Get the initial width of the sidebar to be equal to the window width
  sidebar.style.width = window.innerWidth + 'px';

  // Use setTimeout to delay the transition to 25% after 3 seconds
  setTimeout(function () {
    sidebar.style.transition = 'width 0.5s ease';
    sidebar.style.width = '25%';
    sidebar.style.background = 'url("images/hockey.jpg") no-repeat 50%/cover';

    // Change the color of the links
    navLinks.forEach(function(link) {
      link.style.color = '#000';
    });
  }, 3000); // The sidebar will change width after 3 seconds (3000 milliseconds)
});

function vid_loader(id, myVideo) {
  var vid = document.getElementById(myVideo);
  var div = document.getElementById(id);
  div.onmouseover = function() {
    vid.style.display = 'block';
    vid.play();
  }
  div.onmouseout = function() {
    vid.pause();
    vid.style.display = 'none';
  }
}

async function fetch_football_competition() {
  const url = 'https://livescore-sports.p.rapidapi.com/v1/competitions/team-statistics?stat_type=main&competition_id=65&locale=EN';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2d6f2fa199msh3aeca0e03c58ea8p141364jsn129cec6055bc',
      'X-RapidAPI-Host': 'livescore-sports.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json(); // Convertir la réponse en JSON
    console.log(result["DATA"]);

    // Insérer les données dans la page HTML
    document.getElementById('PLE').innerHTML = ("Event: " + result["DATA"]["COMPETITION_NAME"]);
    document.getElementById('PLL').innerHTML = ("Location: " + result["DATA"]["COMPETITION_DESCRIPTION"]);
    document.getElementById('PLT').innerHTML = ("Team: " + result["DATA"]["STATISTICS"]["0"]["Tids"]["0"]["TEAM_NAME"]);
    document.getElementById('PLS').innerHTML = ("Total Players Point List: " + result["DATA"]["STATISTICS"]["0"]["Tids"]["0"]["PLAYER_POINTS_LIST"]["0"]["Ttl"]);

    document.getElementById('div1').innerHTML = ("Event: " + result["DATA"]["COMPETITION_NAME"]);
    document.getElementById('div2').innerHTML = ("Location: " + result["DATA"]["COMPETITION_DESCRIPTION"]);
    document.getElementById('div3').innerHTML = ("Team: " + result["DATA"]["STATISTICS"]["0"]["Tids"]["1"]["TEAM_NAME"]);
    document.getElementById('div4').innerHTML = ("Total Players Point List: " + result["DATA"]["STATISTICS"]["0"]["Tids"]["1"]["PLAYER_POINTS_LIST"]["0"]["Ttl"]);

    document.getElementById('div5').innerHTML = ("Event: " + result["DATA"]["COMPETITION_NAME"]);
    document.getElementById('div6').innerHTML = ("Location: " + result["DATA"]["COMPETITION_DESCRIPTION"]);
    document.getElementById('div7').innerHTML = ("Team: " + result["DATA"]["STATISTICS"]["0"]["Tids"]["2"]["TEAM_NAME"]);
    document.getElementById('div8').innerHTML = ("Total Players Point List: " + result["DATA"]["STATISTICS"]["0"]["Tids"]["2"]["PLAYER_POINTS_LIST"]["0"]["Ttl"]);

    document.getElementById('div9').innerHTML = ("Event: " + result["DATA"]["COMPETITION_NAME"]);
    document.getElementById('div10').innerHTML = ("Location: " + result["DATA"]["COMPETITION_DESCRIPTION"]);
    document.getElementById('div11').innerHTML = ("Team: " + result["DATA"]["STATISTICS"]["0"]["Tids"]["3"]["TEAM_NAME"]);
    document.getElementById('div12').innerHTML = ("Total Players Point List: " + result["DATA"]["STATISTICS"]["0"]["Tids"]["3"]["PLAYER_POINTS_LIST"]["0"]["Ttl"]);

    document.getElementById('div13').innerHTML = ("Event: " + result["DATA"]["COMPETITION_NAME"]);
    document.getElementById('div14').innerHTML = ("Location: " + result["DATA"]["COMPETITION_DESCRIPTION"]);
    document.getElementById('div15').innerHTML = ("Team: " + result["DATA"]["STATISTICS"]["0"]["Tids"]["4"]["TEAM_NAME"]);
    document.getElementById('div16').innerHTML = ("Total Players Point List: " + result["DATA"]["STATISTICS"]["0"]["Tids"]["4"]["PLAYER_POINTS_LIST"]["0"]["Ttl"]);
  } catch (error) {
    console.error(error);
  }
}
