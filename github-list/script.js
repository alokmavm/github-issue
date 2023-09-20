let pageNo = 1;
let issueList = document.getElementById('list');
let pageTitle = document.getElementById('pageTitle')
function getIssues(page){
let url = `https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`

fetch(url).then((responce)=>responce.json())
.then(data => {
    console.log(data);
    issueList.innerHTML ='';
    data.forEach(issue => {
        console.log(issue);
        let listItem = document.getElementById('list');
        listItem.textContent = issue.title;
        issueList.appendChild(listItem);
        pageTitle.innerHTML = `page number ${page}`

    });
}).catch(e => console.error(e));


    console.log(url);

}
getIssues(pageNo);

function loadPrev(){
    if(pageNo>1){
        pageNo--;
        getIssues(pageNo);
    }
}
function loadNext(){
    pageNo++;
    getIssues(pageNo);
}