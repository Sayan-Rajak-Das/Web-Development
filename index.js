document.getElementById('fetchForm').addEventListener('submit', submitFormFetch);

function submitFormFetch(event) {
    // var fetchForm = document.getElementById("fetchForm");
    // var data = new FormData(fetchForm);
    // fetch("", {
    //       method: "post",
    //       body: data
    //    })
    //    .then((res) => {
    //       return res.text();
    //    })
    //    .then((txt) => {
    //       alert("Submit Success");
    //    })
    //    .catch((err) => {
    //       alert(err);
    //    });
    // return false;


    
    event.preventDefault();

    var fetchForm = document.getElementById('fetchForm');
            fetchForm.reset();
 }
 