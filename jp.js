function updateClock(){
    var now=new Date();
    var hou=now.getHours();
    var min=now.getMinutes();
    var sec=now.getSeconds();
    var pe="AM";


        if(hou<10)
        {
            hou='0'+hou;
        }

        if(min<10)
        {
            min='0'+min;
        }


        if(sec<10)
        {
            sec='0'+sec;
        }

        if(hou==0)
        {
            hou=12;
        }

        if(hou>=12)
        {
            hou=hou-12;
            pe="PM";
        }

       
        var ids=["hour","minutes","seconds","period"];
        var values=[hou,min,sec,pe];

        for (var i=0;i<ids.length;i++)
        {
            document.getElementById(ids[i]).firstChild.nodeValue=values[i];
        }


        

}

function Sou()
{
    addEventListener('mousemove',()=>{
        document.getElementById("music").play();
    });
    
}

function initClock()
{
    updateClock();
    setInterval(updateClock,1000);
    setInterval(Sou,1000);

}

