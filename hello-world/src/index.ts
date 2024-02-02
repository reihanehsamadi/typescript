// let sales: number=134_567_80;
// let courses:string='typical';
// let ispublished:boolean=false;

// let numbers:number[] =[];
// // numbers.forEach(n =>n.)

// let user:[number, string]=[1 ,'mohamad'];
// user.push(1);
//  const small =1;
//  const medium =2;
//  const large =3;
//  or 
//  enum Color {
//     Red,
//     Green,
//     Blue
//   }
  
//   const myColor: Color = Color.Red;
//   console.log(myColor); // Output: Red
//   console.log(Color[0]); // Output: Green

// function calculateTax(income:number) :number{
//     if(income <50_000)
//        return income *1.2;
//     return income * 1.3;
// }

// function calculateTax(income:number) :number{
//     let x;
//     if(income <50_000)
//        return income *1.2;
//     return income * 1.3;
// }

// function calculateTax(income:number , taxYear:number) :number{
//         if(taxYear <50_000)
//            return income *1.2;
//         return income * 1.3;
//     }
//     calculateTax(10000 , 20000 );

// function calculateTax(income:number , taxYear?:number) :number{
//     if(taxYear <50_000)
//        return income *1.2;
//     return income * 1.3;
// }
// calculateTax(10000 );

// khata mide  
// function calculateTax(income:number , taxYear=2022) :number{
//     if(taxYear <50_000)
//        return income *1.2;
//     return income * 1.3;
// }
// calculateTax(10000 );
//  objectha

// let employee ={
//     id:1
// };
// employee.name='ali';

// hale khata 

// let employee:{
//     id:number,
//     name:string
// } ={
//     id:1,
//     name:""
// };
// employee.name='ali';

// readonly kardan 

// let employee:{
//     id:number,
//     name:string
// } ={
//     id:1,
//     name:""
// };
// employee.name='ali';

// khta mide chon readonly hastesh va nmitunim taghiresh bedim 

// let employee:{
//     readonly  id:number,
//     name:string
// } ={
//     id:1,
//     name:""
// };
// employee.id=2;

// قرار دادن یک متد داخل ابجکت

// let employee: {
//     readonly id: number;
//     name: string;
//     retire: (date: Date) => void;
//   } = {
//     id: 1,
//     name: "",
//     retire: (date: Date) => {
//       console.log(date);
//     },
//   };

// function kgToLbs(weight : number | string ) : number {
//     if (typeof weight === 'number') 
//   return weight *2.2;
//   else
//   return parseInt(weight) *2.2;
// }  

// type Number = {
//   value: number;
// };

// type String = {
//   value: string;
// };
// اکنون نوع Numeric شامل ویژگی های زیر است:

//     value: number | string;

// بنابراین، می توانیم یک متغیر از نوع Numeric را به صورت زیر تعریف کنیم:

type Numeric = Number & String;
 
// const numeric: Numeric = {
//   value: 123,
// };
// این متغیر شامل ویژگی value است، که می تواند یک عدد یا یک رشته باشد.

