
const express = require("express")();

express.get('/',(req, res)=>{
    res.send('<h1>Server Running</h1>');
    res.end();
})

express.listen(process.env.PORT || 9000, (error) => {
  if (error) throw error;
  console.log(`server running on port ${process.env.PORT || 9000}`);
});
