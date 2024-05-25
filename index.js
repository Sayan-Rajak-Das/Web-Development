document.querySelector('.cross').style.display = "none";
document.querySelector('.hamburger').addEventListener("click", function(){
    document.querySelector('.sidebar').classList.toggle('sidebarGo');

    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = "inline";
        document.querySelector('.cross').style.display = "none";
    }
    else{
        document.querySelector('.ham').style.display = "none";
        setTimeout(function (){
            document.querySelector('.cross').style.display = "inline";
        }, 300);
    }
});

document.getElementById('fetchForm').addEventListener('submit', submitFormFetch);

function submitFormFetch(event) {
    
    event.preventDefault();

    var fetchForm = document.getElementById('fetchForm');
            fetchForm.reset();
}