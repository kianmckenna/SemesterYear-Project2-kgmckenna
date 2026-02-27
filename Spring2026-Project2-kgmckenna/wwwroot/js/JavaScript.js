// retrieve current time
$(function () {
    $("#time").click(function () {
        let now = new Date();
        let currentTime = now.toLocaleTimeString();

        $("#timeDisplay").text(currentTime);
    });
});

// prevent form reload
$(function () {
    $("#searchForm").submit(function (event) {
        event.preventDefault();

        let query = $("#searchInput").val();
        console.log("Searching for: ", query);

    });
});