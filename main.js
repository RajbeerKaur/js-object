function book(title,autor,pages,read)
{
    this.title = "TheHobbit";
    this.autor = "J.R.R. Tolkien";
    this.pages = 295;
    this.read ="not read yet"
}
book.prototype.string = function(){
         return this.title + 'by ' + this.autor + 'is' + this.page + 'long ' +
   
}
    
book.prototype.string= function(){
    console.log(this.string);
}
