class parent {
hello1(){
    console.log("Hello1");
}


hello2(){
    console.log("Hello2");
}
}

class child extends parent{
    demo(){
        super.hello1();
        super.hello2();
    }
}

var obj=new child();
obj.demo();

