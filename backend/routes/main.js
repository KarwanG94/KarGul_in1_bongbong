

welcome = (req, res) => {
   console.log('welcome page');
   
    res.status(200)
    res.send(
            `
             <h1>Welcome to BingBong</h1>
             <button onClick="user()">Users</button>       
            
             <script>
                function user(){
                    console.log("clicked user");
                }
             </script>
             `
        );
    };

module.exports = {
    welcome: welcome,
} 
        