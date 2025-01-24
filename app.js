// For3. Bir kg konfetning narxi berilgan (haqiqiy son). 1, 2, 10 kg konfetni narxini chiqaruvchi programma tuzilsin.

let bir_kg_konfet_narxi = +prompt("bir kilogram konfet narxini kiriting:");

for (let i = 1; i <= 10; i++) {
    console.log(`${i} kg konfet narxi: ${i*bir_kg_konfet_narxi}`);
}

// For4. Bir kg konfetning narxi berilgan (haqiqiy son). 1.2, 1.4, ..., 2 kg konfetni narxini chiqaruvchi programma tuzilsin.

let bir_kg_konfet_narxi_ = +prompt("bir kilogram konfet narxini kiriting:");

for (let i = 1; i <= 2; i+=0.2) {
    console.log(`${i} kg konfet narxi: ${i*bir_kg_konfet_narxi_.toFixed(3)}`);
}


// For5. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar yig'indisini chiqaruvchi programma tuzilsin.

let a = +prompt("a soniga qiymat bering:");

let b = +prompt("b soniga qiymat bering:");

let sum = 0;

for (let i = a; i <= b; i++) {
    sum+=i;
}
console.log(sum);

// For6. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar ko'paytmasini chiqaruvchi programma tuzilsin.


let a_ = +prompt("a soniga qiymat bering:");

let b_ = +prompt("b soniga qiymat bering:");

let sum_ = 1;

for (let i = a_; i <= b_; i++) {
    sum_*=i;
}
console.log(sum_);

// For7. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar kvadratlarining yig'indisini chiqaruvchi programma tuzilsin.


let a__ = +prompt("a soniga qiymat bering:");

let b__ = +prompt("b soniga qiymat bering:");

let sum__ = 0;

for (let i = a__; i <= b__; i++) {
    sum__+=i**2;
}
console.log(sum__);

// For8. n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi programma tuzilsin. S=1+1/2+1/3+...+1/n;

let n = +prompt("n soniga qiymat bering:");

let s = 0;

for (let i =1; i<=n; i++) {
    s+=1/i;
}
console.log(s.toFixed(2));

// For9. n butun soni berilgan (n > 0). Quyidagi ko'paytmani hisoblovchi programma tuzilsin. S=1.1*1.2* 1.3*... *n

let n_ = +prompt("n soniga qiymat bering:");

let s_ = 1;

for (let i =1; i<=n_; i+=0.1) {
    s_*=1+i;
}
console.log(s_.toFixed());

// For10. n butun soni berilgan (n > 0). Shu sonning kvadratini quyidagi formula asosida hisoblovchi programma tuzilsin.
// n^2=1+3+5+... + (2*n-1);

let n__ = +prompt("n soniga qiymat bering:");

let S_ = 0;

for (let i =1; i<=n__; i++) {
    S_=0;
    for (let j=1; j <=2*i; j+=2) {
        S_+=j;
    }
    console.log(S_);
}


// For11. n butun soni va a haqiqiy soni berilgan (n > 0). a ning n - darajasini aniqlovchi programma tuzilsin.a^n=a*a*a...a;

let q = +prompt("a soniga qiymat bering:");
let w = +prompt("n soniga qiymat bering:");
let w_q = 1;
for (let i =0; i < w; i++) {
    w_q= w_q*q;
}
console.log(w_q);

// For12. n butun soni va a haqiqiy soni berilgan (n > 0). Bir sikldan foydalanib a ning 1 dan n gacha bo'lgan barcha darajalarini chiqaruvchi programma tuzilsin.


let q_ = +prompt("a soniga qiymat bering:");
let w_ = +prompt("n soniga qiymat bering:");

for (let i = 1; i <= w_; i++) {
    console.log(`${q_} sonining ${i}-darajasi ${q_**i}`);
}

// For13. n butun soni va a haqiqiy soni berilgan (n > 0). Bir sikldan foydalanib quyidagi a ning 1 dan n gacha bo'lgan barcha darajalarini chiqaruvchi va yig'indini hisoblovchi programma tuzilsin. S = 1+a^1+a^2 + a^3 + ... a^n

let u = +prompt("a soniga qiymat bering:");
let v = +prompt("n soniga qiymat bering:");

let sa = 0;

for (let i=1; i<= v; i++) {
    console.log(`${u} sonining ${i}-darajasi ${u**i}`);
    sa+=u**i;
}console.log(sa);

// For14. n butun soni berilgan (n > 0). Bir sikldan foydalangan holda quyidagi yig'indini hisoblovchi programma tuzilsin.S = 1! + 2! + 3! + ... + n!;

let NN = +prompt("n soniga qiymat kiriting:");
let KK = 1;
let SS = 0;

for (let i=1; i<=NN; i++) {
    KK*=i;
    SS+=KK;
} console.log(SS);

// For15. N va K butun sonlari berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin. S = 1^K + 2^K + ... + N^K

let N = +prompt("N soniga qiymat bering:");

let K =+prompt("K soniga qiymat kiriting:");

let N_K = 0;

for (let i = 1; i<=N; i++) {
    N_K+=i**K;
}
console.log(N_K);

// For16. N butun soni berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin. S = 1^1 + 2^2 + … + N^N;

let N_ = +prompt("N soniga qiymat kiriting:");
let _s = 0;

for(let i=1; i<=N_; i++){
    _s+=i**i;
}console.log(_s);

// For17. A va B butun soni berilgan (A < B). A va B sonlari orasidagi barcha butun sonlarni chiqaruvchi programma tuzilsin. Bunda A soni 1 marta, (A + 1) soni 2 marta chiqariladi va xokazo.

let _A = +prompt("a soniga qiymat kiriting:");
let _B = +prompt("b soniga qiymat kiriting:");

for (let i=_A; i<=_B; i++) {
    
    for (let j = 1; j<=i; j++) {
        console.log(i);
    }
    
}

// For18. Sonning barcha bo’luvchilarini, ularning sonini va yig’indisini chiqaruvchi dastur tuzing.

let son = +prompt("son kiriting:");
let count_son = 0;
let sum_son = 0;

for (let i=1; i<=son; i++) {
    if (son%i==0) {
        count_son++;
        sum_son+=i;
        console.log(i);
    }
}
console.log("bo'luvchilar soni: ",count_son," ularning yig'indisi: ", sum_son);

// For19. n butun soni berilgan (n > 1). N sonini tub yoki tub emasligini aniqlovchi programma tuzilsin.

let sonn = +prompt("son kiriting:");

let count_of_del = 0;

for (let i =1; i<=sonn; i++) {
    if (sonn%i==0) {
        count_of_del++;
    }
}
if (count_of_del>2) {
    console.log("siz kiritgan son tub emas");
} else if (count_of_del==1) {
    console.log("siz kiritgan son 1ga teng (Eslatma: 1 tub ham emas juft ham emas");
}
else {
    console.log(true);
}


// For20. Sonlarni quyidagi tartibda chiqaruvchi dastur tuzing. N = 5 bo’lganda,
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

let  RR = 5;
let array = [];
for (let i=1; i<=RR; i++ ){
    array=[];   
    for (let j=0; j<i; j++) {
        array.push(i);
    }
    console.log(array);
}


// While1. A va B butun musbat sonlari berilgan (A > B). A usunlikdagi kesmada maksimal darajada B kesma joylashtirilgan. A kesmaning bo'sh qismini aniqlovchi programma tuzilsin. Ko'paytirish va bo'lish amallarini ishlatmang.

let W_ = +prompt("A soniga qiymat bering:");
let G_ = +prompt("B soniga qiymat bering:");

while (W_ >= G_) {
    W_-=G_;
} console.log(`A kesmaning bo'sh qismi: ${W_}`); 

// While2. A va B butun musbat sonlari berilgan (A > B). A usunlikdagi kesmada B kesmadan nechta joylashtirish mumkinligini aniqlovchi programma tuzilsin. Ko'paytirish va bo'lish amallarini ishlatmang.

let W = +prompt("A soniga qiymat bering:");
let G = +prompt("B soniga qiymat bering:");
let somma = 0;
while (W >= G) {
    somma++;
    W-=G;
} console.log(`A kesmada B kesmadan ${somma}ta joylashtirish mumkin!`); 

// While3. n butun soni berilgan (n > 0). Agar n soni 3 ning darajasi bo'lsa "3 - ning darajasi", aks xolda "3 - ning darajasi emas” degan natija chiqaruvchi programma tuzilsin. Qoldiqli bo'lish va bo'lish amallarini ishlatmang.

let _N = +prompt("n soniga qiymat bering:");
let i = 1;
while(i<_N) {//12
    i=3*i;
    
}
if (i==_N) {
    console.log("bu son 3ning darajasi");
} else{
    console.log("bu son 3ning darajasi emas");
}

// While4. n va m butun musbat sonlari berilgan (n > m). n sonini m soniga bo'lib butun va qoldiq qismlarini bo'lish va qoldiqni olish amallarini ishlatmasdan topuvchi programma tuzilsin.

let WW = +prompt("bo'linuvchiga qiymat kiriting:");
let MM = +prompt("Bo'luvchiga qiymat kiriting:");

let butun_qism = 0;
let qoldiq_qism = 0;

while (WW!=MM) {
    if (WW < MM) {
        qoldiq_qism+=WW;
        break;
    } else {
        butun_qism++;
    }
    WW-=MM;
}
console.log(`butun qismi: ${butun_qism} ; qoldiq qismi: ${qoldiq_qism}`);

// While5. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarini teskari tartibda chiqaruvchi programma tuzilsin.

let TT = +prompt("n soniga qiymat kiriting:");

let QA = 0;
    
//  console.log(QA, TT);

while (TT>0) {
    QA=TT%10;
    TT=TT/10|0;
    console.log(QA);
}

// While6. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlari yig'indisini va raqamlari sonini chiqaruvchi programma tuzilsin.

let TT_ = +prompt("n soniga qiymat kiriting:");

let QA_ = 0;
let AW = 0;

while (TT_>0) {
    QA_+=TT_%10;
    TT_=TT_/10|0;
    AW++;
} console.log("Summa:",QA_,"Xonalar soni:", AW);

// While7. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarining orasida 2 raqami bor-yo'qligini aniqlovchi programma tuzilsin.

let TT__ = +prompt("n soniga qiymat kiriting:");

let QA__ = 0;

let QW = 0;
while (TT__>0) {
    QA__=TT__%10;
    TT__=TT__/10|0;
    if (QA__===2) {
 
        QW++;
    }

} if(QW>0){
    console.log("2 raqami bor");
} else {
     console.log("2raqami yo'q");
}

// While8. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarining orasida toq raqamlar bor-yo'qligini aniqlovchi programma tuzilsin.

let EE = +prompt("n soniga qiymat bering:");

let SH = 0;
let HS = 0;

while(EE>0) {
    SH=EE%10;
    EE=EE/10 |0;
    if (SH%2==1) {
        HS++;
    }
} if (HS>0) {
    console.log("toq raqam bor ");
} else {
    console.log("toq raqam yoq ");
}


// While9. Palindromik songa tekshirish dasturini yozing. True yoki False qaytarsin.
// Palindromik son – boshidan va oxiridan o’qilish bir xil bo’lgan son, masalan 1345431, 45788754




 
//While10. n butun soni berilgan (n > 1). N sonini tub yoki tub emasligini aniqlovchi programma tuzilsin.

let sonne = +prompt("son kiriting:");
let RG = 0;
let SW = 0;

while (sonne>SW) {
    if (sonne%SW==0) {
        RG++;
    }SW++;
} if (RG>2) {
    console.log("bu son tub emas");
} else if (sonne==1) {
    console.log("bu son 1ga teng");
} else {
    console.log("bu son tub son");
}
