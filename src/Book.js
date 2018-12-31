function Book(book) {
    this.id = book.id;
    this.title = book.title;

    try 
    {
        this.author = book.author[0].id;
    }
    catch (e)
    {
        this.author = "unknown";
    }
    try{
        this.publisher = new Publisher(book.publisher[0]);
    }
    catch (e){
        this.publisher = "unknown";
    }

}
export default Book 