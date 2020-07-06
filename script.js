function loveFinder(){
var n=document.form.first.value;
    var m=document.form.second.value;
    var p=(n.length+m.length);
    var f="flames";
    
function posDelete(pos,name){
    

    var t=name.length;
    if(t>1)
    {
        
    
        var t=name.length;
        if(pos <= t)
        {
            name = name.slice(0,pos-1) + name.slice(pos);
            
            var t=name.length;
            var f=name;

        }
        else
        {
            var t=name.length;
            var pos=pos%t;
            if(pos!=0)
            {
                name = name.slice(0,pos-1) + name.slice(pos);
               
                var f=name;

            }
            else
            {
                name = name.slice(0,-1);
                document.getElementById("demo").innerHTML =name;
                var f=name;
            }

        }
        
    }
    
    
    posDelete(p,f);
}
posDelete(p,f);
}
