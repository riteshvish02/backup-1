class ritesh{
    constructor(name){
        this.name = name;
    }

    displayName(){
        console.log(this.name);
    }
}



class person extends ritesh{
    constructor(name,age){
        super(name);
        this.age = age;
    }
    display(){
        console.log(this.age);
        console.log(this.name);
    }

}

var ans = new person("kumar",22);
// ans.display();
console.log(ans);
