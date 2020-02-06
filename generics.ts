//======================
//*********************
// generics tutorial
//*********************
//======================


//======================
// basic 
//=====================
const getLast = <T>(array: T[]): T => {
  return array[array.length - 1]
}


const last1 = getLast(['1', '2', '3'])
const last2 = getLast([1, 2, 3])

// override type
// const last3 = getLast<string>()





//======================
// 
//=====================
const creatArr = <X, Y>(e1: X, e2: Y): [X, Y] => {
  return [e1, e2]
}

const numberArr = creatArr(1, 2)
const string = creatArr('a', 'b')
const tuple = creatArr('a', 1)
const customType = creatArr<string, string>(null, '1')
