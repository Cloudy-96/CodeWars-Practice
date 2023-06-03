// EXAMPLE:
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  // split string
  const array = str.split(" ");
  console.log(array);

  const newArray = array.map((word) => {
    //attach pig
    const pig = word + word[0] + "ay";
    //remove first letter
    const piggish = pig.substring(1);
    //  return
    console.log(piggish);
    return piggish;
  });
  console.log(newArray.join(" "));
  return newArray.join(" ");
}

// pigIt("Hello world");
