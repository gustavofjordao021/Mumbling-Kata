function accum(str) {
    return str.split('').map((letter, index) => {
        return index === 0 ? letter.toUpperCase() : letter.toUpperCase() + letter.toLowerCase().repeat(index);
      }).join('-');
  };
  
  console.log(accum("abcd"));
  console.log(accum("RqaEzty"));l