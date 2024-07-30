const Calculate = {
    factorial: function (num) {
      if(num === 0){
        return 1
      }
      for (i = num - 1; i > 0; i--) {
        num *= i;
      }
      return num;
    },
  };
  
  module.exports = Calculate;
  