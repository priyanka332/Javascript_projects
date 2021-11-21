var user = prompt("enter link: ")
var link=document.links;
for (var i=0;i<link.length;i++){
    if (link[i].text==user){
        console.log(link[i]);
    }
}




// Output:

// <a target="_blank" href="https://merakilearn.org/">MERAKI</a>