

let cnt=0;
function theme()
{
    addEventListener('click',()=>{
        cnt++;
        if(cnt%2 == 1) {
            document.body.style.backgroundColor="black";
        } else {
            document.body.style.backgroundColor="#e5e9eb";
        }
    })
}
