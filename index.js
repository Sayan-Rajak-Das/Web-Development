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


    

            // const form = document.getElementById('fetchForm');
            // const formData = new FormData(form);
        
            // fetch('http://localhost:5000/register', {
            //     method: 'POST',
            //     body: formData
            // })
            // .then(response => {
            //     if (response.ok) {
            //         console.log('Request received');
            //     } else {
            //         console.error('Request failed');
            //     }
            // })
            // .catch(error => {
            //     console.error('Error:', error);
            // });
 }
 