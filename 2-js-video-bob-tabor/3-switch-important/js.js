var date=new Date();
var hour=date.getHours();

switch(true){
        
        
    case (hour>8&&hour<12):
        document.write("It is morning");
        break;
        
        case(hour==12):
        document.write("It is time for lunch");
        break;
        case(hour>12&&hour<18):
        document.write("Fight time");
        break;
    default:
        document.write("Careful");
        
        
        
        

        
}