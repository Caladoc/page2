$(function () {
  if (window.location.href.indexOf("index") > -1) {
    // Slider
    $(".bxslider").bxSlider({
      mode: "fade",
      captions: true,
      slideWidth: 1200,
    });
  }
  // Posts
  if (window.location.href.indexOf("index") > -1) {
    var posts = [
      {
        title: "Title 1",
        date: moment().format("MMMM Do YYYY"),
        content:
          " Lorem llum ration ie magnam laborum.lorem consectetur adipisicing elit. Laborum dolor illo quasi nam maximeearum voluptatum, ex aut quas fugit, nihil, dicta rem accusamusLorem ipsum dolor sit ametipsum dolor  Lorem ipsum dolor sit amet consectetur adipisaborum.exercitationem ex dolor sint error quas explicabo,sit officia distinctio nobis harum delectus!icing elit. Quoperferendis est reprehenderit? Fugiat accusamus obcaecatilaboriosam voluptatibus aliquid, exercitationem ex dolor sintrror quas explicabo, ab illum ratione magnam",
      },
      {
        title: "Title 2",
        date:
          " Posted the day " +
          moment().day() +
          " of " +
          moment().format("MMMM") +
          " of the " +
          moment().format("YYYY"),
        content:
          " Lorem llum ration ie magnam laborum.lorem consectetur adipisicing elit. Laborum dolor illo quasi nam maximeearum voluptatum, ex aut quas fugit, nihil, dicta rem accusamusLorem ipsum dolor sit ametipsum dolor  Lorem ipsum dolor sit amet consectetur adipisaborum.exercitationem ex dolor sint error quas explicabo,sit officia distinctio nobis harum delectus!icing elit. Quoperferendis est reprehenderit? Fugiat accusamus obcaecatilaboriosam voluptatibus aliquid, exercitationem ex dolor sintrror quas explicabo, ab illum ratione magnam",
      },
      {
        title: "Title 3",
        date:
          " Posted the day " +
          moment().day() +
          " of " +
          moment().format("MMMM") +
          " of the " +
          moment().format("YYYY"),
        content:
          " Lorem llum ration ie magnam laborum.lorem consectetur adipisicing elit. Laborum dolor illo quasi nam maximeearum voluptatum, ex aut quas fugit, nihil, dicta rem accusamusLorem ipsum dolor sit ametipsum dolor  Lorem ipsum dolor sit amet consectetur adipisaborum.exercitationem ex dolor sint error quas explicabo,sit officia distinctio nobis harum delectus!icing elit. Quoperferendis est reprehenderit? Fugiat accusamus obcaecatilaboriosam voluptatibus aliquid, exercitationem ex dolor sintrror quas explicabo, ab illum ratione magnam",
      },
      {
        title: "Title 4",
        date:
          " Posted the day " +
          moment().day() +
          " of " +
          moment().format("MMMM") +
          " of the " +
          moment().format("YYYY"),
        content:
          " Lorem llum ration ie magnam laborum.lorem consectetur adipisicing elit. Laborum dolor illo quasi nam maximeearum voluptatum, ex aut quas fugit, nihil, dicta rem accusamusLorem ipsum dolor sit ametipsum dolor  Lorem ipsum dolor sit amet consectetur adipisaborum.exercitationem ex dolor sint error quas explicabo,sit officia distinctio nobis harum delectus!icing elit. Quoperferendis est reprehenderit? Fugiat accusamus obcaecatilaboriosam voluptatibus aliquid, exercitationem ex dolor sintrror quas explicabo, ab illum ratione magnam",
      },
      {
        title: "Title 5",
        date:
          " Posted the day " +
          moment().day() +
          " of " +
          moment().format("MMMM") +
          " of the " +
          moment().format("YYYY"),
        content:
          " Lorem llum ration ie magnam laborum.lorem consectetur adipisicing elit. Laborum dolor illo quasi nam maximeearum voluptatum, ex aut quas fugit, nihil, dicta rem accusamusLorem ipsum dolor sit ametipsum dolor  Lorem ipsum dolor sit amet consectetur adipisaborum.exercitationem ex dolor sint error quas explicabo,sit officia distinctio nobis harum delectus!icing elit. Quoperferendis est reprehenderit? Fugiat accusamus obcaecatilaboriosam voluptatibus aliquid, exercitationem ex dolor sintrror quas explicabo, ab illum ratione magnam",
      },
      {
        title: "Title 6",
        date:
          " Posted the day " +
          moment().day() +
          " of " +
          moment().format("MMMM") +
          " of the " +
          moment().format("YYYY"),
        content:
          " Lorem llum ration ie magnam laborum.lorem consectetur adipisicing elit. Laborum dolor illo quasi nam maximeearum voluptatum, ex aut quas fugit, nihil, dicta rem accusamusLorem ipsum dolor sit ametipsum dolor  Lorem ipsum dolor sit amet consectetur adipisaborum.exercitationem ex dolor sint error quas explicabo,sit officia distinctio nobis harum delectus!icing elit. Quoperferendis est reprehenderit? Fugiat accusamus obcaecatilaboriosam voluptatibus aliquid, exercitationem ex dolor sintrror quas explicabo, ab illum ratione magnam",
      },
    ];

    posts.forEach((item, index) => {
      var post = `<article class="post">
      <h2>${item.title}</h2>
      <span class="date">${item.date}</span>
      <p>
       ${item.content}
      </p>
      <a href="#" class="button-more">
        Read More
      </a>
    </article>
    `;
      $("#posts").append(post);
    });
  }
  // Selector Theme

  var theme = $("#theme");
  $("#to-green").click(function () {
    theme.attr("href", "css/green.css");
  });
  $("#to-red").click(function () {
    theme.attr("href", "css/red.css");
  });
  $("#to-blue").click(function () {
    theme.attr("href", "css/blue.css");
  });
  // Scroll up from the web
  $(".go-up").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });

  // Login false

  $("#login form").submit(function () {
    var form_name = $("#form_name").val();
    localStorage.setItem("form_name", form_name);
  });
  var form_name = localStorage.getItem("form_name");

  if (form_name != null && form_name != "undefined") {
    var about_parrafo = $("#about p");
    about_parrafo.html("<br><strong>Welcome, " + form_name + "</strong>");
    about_parrafo.append(" --- <a href='#' id='logout'>Sign off</a>");
    $("#login").hide();

    $("#logout").click(function () {
      localStorage.clear();
      location.reload();
    });
  }
  if (window.location.href.indexOf("about-me") > -1) {
    $("#accordion").accordion();
  }
  // Clock
  if (window.location.href.indexOf("clock") > -1) {
    setInterval(function () {
      var clock = moment().format("h:mm:ss ");
      $("#clock").html(clock);
    }, 1000);
  }

  // Validation
  if (window.location.href.indexOf("contact") > -1) {
    $("form input[name='date']").datepicker({
      dateFormat: "dd-mm-yy",
    });
    $.validate({
      lang: "en",
      errorMessagePosition: "top",
      scrollToTopOnError: true,
    });
  }
});
