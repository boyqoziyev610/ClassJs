class Mashina{
    constructor(nom, model, rang, raqam, yil, yoqilgi, motor, chiroq){
        this.nom=nom;
        this.model=model;
         this.rang=rang;
         this.raqam=raqam;
         this.yil=yil;
         this.yoqilgi=yoqilgi;
         this.motor=motor;
         this.chiroq=chiroq; 
    }
    texnoPassport(){
    return this.carInfo()
    }
    #carInfo(){
        return `mashinaning nomi:${this.nom}   modeli: ${this.model} rangi:${this.rang}`
    }
    ruhsat(){
     return this.remont=`ruxsat bor`
    }
    remont(){
   return this.ruhsat()

    }
    ochirish(){
        return this.#ochir()
    }
    #ochir(){
        this.chiroq=`o'chdi`
        this.motor=`toxtadi`
        return `chiroq: ${this.chiroq}, motori: ${this.motor}`
    }
    yoqish(){
        return this.#yoq()
    }
    #yoq(){
        this.motor=`ishladi`;
        this.chiroq=`yondi`;
        return `chiroq :${this.chiroq} motori:${this.motor}`
}
yurish(){
    this.yoqilgi -=30
    return `yoqilg'i ${this.yoqilgi}`
}
zapravka(){
    this.yoqilgi +=30
    return `yoqilgi ${this.yoqilgi}`
}
holat(){
    return `yoqilg'i: ${this.yoqilgi}, chiroq:${this.chiroq} , mator:${this.motor} `
}
}



const  carInfo= new Mashina ('BMW', 'x7', 'qora', '777AAA', 2023, 12)
console.log(carInfo.ochirish())